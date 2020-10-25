import React from 'react'

export default function Banner({ children }) {
	return (
		<div className='p-2 top-0 text-center bg-link font-display font-bold text-lg w-full'>
			{children}
		</div>
	)
}
