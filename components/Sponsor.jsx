import React from 'react'

function Sponsor() {
	return (
		<a
			href='https://github.com/sponsors/KL13NT'
			className='block bg-white px-5 py-1 mt-2 border border-slate-300 rounded-md hover:no-underline group hover:bg-slate-100 transition-colors'
		>
			<img
				src='/sponsor.svg'
				alt=''
				role='presentation'
				className='inline-block text-black h-4 mie-4 group-hover:scale-110 transition-transform ease-[cubic-bezier(0.2, 0, 0.13, 2)]'
			/>
			Sponsor
		</a>
	)
}

export default Sponsor
