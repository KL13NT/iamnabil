import React, { useEffect, useState } from 'react'

const images = [
	'/images/nabil-2.jpg',
	'/images/nabil-3.jpg',
	'/images/nabil-1.jpg'
]

export default function Hero() {
	const [index, setImage] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			const newIndex = index + 1 === images.length ? 0 : index + 1
			setImage(newIndex)
		}, 3 * 1000)

		return () => clearInterval(interval)
	})

	return (
		<div className='flex flex-col items-center justify-between lg:flex-row gap-8 mb-10 max-w-[650px] mx-auto'>
			<div>
				<h1>Nabil Tharwat</h1>
				<p>Software Engineer in Cairo</p>
			</div>
			<img
				src={images[index]}
				alt='Me!'
				className='w-3/4 aspect-square lg:w-60 rounded-full object-cover border-4 border-link m-0 max-w-[240px]'
			/>
		</div>
	)
}
