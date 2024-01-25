import React from 'react'

export default function Hero() {
	return (
		<div className='flex flex-col items-center justify-between lg:flex-row gap-8 mb-10 max-w-[650px] mx-auto'>
			<div>
				<h1>Nabil Tharwat</h1>
				<p>Software Engineer in Cairo</p>
			</div>
			<img
				src='/images/nabil-2.jpg'
				alt='Me!'
				className='w-3/4 aspect-square lg:w-60 rounded-full object-cover border-4 border-link m-0 max-w-[240px]'
				loading='lazy'
			/>
		</div>
	)
}
