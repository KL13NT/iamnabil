import React, { useEffect, useState, useRef } from 'react'

const API_URL =
	process.env.NODE_ENV === 'production'
		? 'https://cieunwmomjvpbctojhmr.supabase.co/functions/v1/rendezvous-connect'
		: 'http://127.0.0.1:54321/functions/v1/rendezvous-connect'

const TURNSTILE_KEY =
	process.env.NODE_ENV === 'development'
		? '1x00000000000000000000AA'
		: '0x4AAAAAAASKbQ0AU0yEEUXm'

const API_JWT =
	process.env.NODE_ENV === 'development'
		? `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0`
		: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZXVud21vbWp2cGJjdG9qaG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNTYwNzcsImV4cCI6MjAyMzgzMjA3N30.q6G_faganDvjblAmVlVQMVYXkzEgSSK1FyRsX2T0PSI`

console.log(TURNSTILE_KEY)

function blobToBase64(blob) {
	return new Promise((resolve, _) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.readAsDataURL(blob)
	})
}

let chunks = []
const Rendezvous = () => {
	const audioPlayer = useRef()
	const turnstileRef = useRef()
	const [state, setState] = useState({
		recording: false,
		playing: false,
		audioURL: null,
		base64: null,
		turnstileSuccess: null
	})

	const handleSubmit = async event => {
		event.preventDefault()

		const form = new FormData(event.target)
		const response = window.turnstile.getResponse()

		await fetch(API_URL, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${API_JWT}`
			},
			body: JSON.stringify({
				base64: state.base64,
				name: form.get('name'),
				'cf-turnstile-response': response
			})
		})
	}

	const startRecording = () => {
		const handleSuccess = function (stream) {
			const mediaRecorder = new MediaRecorder(stream)
			mediaRecorder.start()

			mediaRecorder.onstop = async () => {
				const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
				const base64 = await blobToBase64(blob)
				const audioURL = URL.createObjectURL(blob)

				chunks = []

				setState(state => ({
					...state,
					audioURL,
					base64,
					recording: false
				}))
			}

			mediaRecorder.ondataavailable = e => {
				chunks.push(e.data)
			}

			setState(state => ({
				...state,
				recording: true,
				mediaRecorder
			}))
		}

		navigator.mediaDevices
			.getUserMedia({ audio: true, video: false })
			.then(handleSuccess)
	}

	const stopRecording = () => {
		state.mediaRecorder.stop()
	}

	const play = () => {
		const endedListener = () => {
			audioPlayer.current.removeEventListener('ended', endedListener)

			setState(state => ({
				...state,
				playing: false
			}))
		}

		audioPlayer.current.play()
		audioPlayer.current.addEventListener('ended', endedListener)

		setState(state => ({
			...state,
			playing: true
		}))
	}

	const stop = () => {
		audioPlayer.current.pause()
		audioPlayer.current.currentTime = 0

		setState(state => ({
			...state,
			playing: false
		}))
	}

	const retry = () => {
		setState(state => ({
			...state,
			playing: false,
			audioURL: null,
			recording: false,
			mediaRecorder: null
		}))
	}

	useEffect(() => {
		window.turnstile.ready(function () {
			window.turnstile.render(turnstileRef.current, {
				sitekey: TURNSTILE_KEY,
				callback: function () {
					setState(state => ({
						...state,
						turnstileSuccess: true
					}))
				}
			})
		})
	}, [])

	return (
		<div className='container mx-auto p-4 mt-16 w-fit min-w-[300px]'>
			<form
				className='flex flex-col justify-center items-center gap-6 min-w-[300px]'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					name='name'
					placeholder='Your name'
					className='bg-primary rounded-md text-accent placeholder:text-accent border-2 border-link block flex-1 sm:text-sm sm:leading-6 py-2 px-4 w-full'
					required
				/>

				<audio className='hidden' ref={audioPlayer} src={state.audioURL} />

				{state.audioURL && !state.recording ? (
					<div className='flex col justify-center items-center gap-2'>
						<div className='flex items-center justify-center gap-2'>
							{state.playing ? (
								<button
									onClick={stop}
									type='button'
									className='flex gap-2 justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
								>
									Stop
									<img
										src='/icons/stop.svg'
										role='presentation'
										alt=''
										className='h-6'
									/>
								</button>
							) : (
								<button
									onClick={play}
									type='button'
									className='flex gap-2 justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
								>
									Play
									<img
										src='/icons/play.svg'
										role='presentation'
										alt=''
										className='h-6'
									/>
								</button>
							)}
						</div>
						<button
							onClick={retry}
							className='flex gap-2 justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
						>
							Record again
							<img
								src='/icons/restart.svg'
								role='presentation'
								alt=''
								className='h-6'
							/>
						</button>
					</div>
				) : state.recording ? (
					<button
						type='button'
						onClick={stopRecording}
						className='flex gap-2 justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
					>
						Stop recording
						<img
							src='/icons/stop.svg'
							role='presentation'
							alt=''
							className='h-8'
						/>
					</button>
				) : (
					<button
						type='button'
						onClick={startRecording}
						className='flex justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
					>
						Start recording
						<img
							src='/icons/mic.svg'
							role='presentation'
							alt=''
							className='h-8'
						/>
					</button>
				)}

				<div ref={turnstileRef} className='h-[65px]'></div>

				{!state.recording && state.audioURL && state.turnstileSuccess ? (
					<button
						type='submit'
						className='flex gap-2 justify-center items-center py-2 px-4 font-bold text-md border rounded-md text-theme-contrast bg-link transition-colors'
					>
						Submit
						<img
							src='/icons/play.svg'
							role='presentation'
							alt=''
							className='h-6'
						/>
					</button>
				) : null}
			</form>
		</div>
	)
}

export default Rendezvous
