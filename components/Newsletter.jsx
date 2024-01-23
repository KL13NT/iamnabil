import React from 'react'

export default function Newsletter() {
	return (
		<div className='mt-12 bg-[#f3f3f3] rounded p-8 text-center md:text-left border-[#eee] border-2'>
			<iframe
				src='https://rendezvouswnabil.substack.com/embed'
				title='Newsletter subscription form'
				width='100%'
				height='150'
				style={{
					width: '100%'
				}}
				frameBorder='0'
				scrolling='no'
			></iframe>
		</div>
	)
}
