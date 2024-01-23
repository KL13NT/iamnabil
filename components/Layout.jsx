import React from 'react'

export default function Layout({ children, thin }) {
	return (
		<div className={`${thin && 'max-w-[650px]'} lg:w-3/6 mx-auto`}>
			{children}
		</div>
	)
}
