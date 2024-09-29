import React from 'react'

export default function Layout({ children, thin }) {
	return (
		<div className={`${thin && 'max-w-[650px]'} lg:w-3/6 mx-auto`}>
			{children}

			<script
				data-name='BMC-Widget'
				data-cfasync='false'
				src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
				data-id='kl13nt'
				data-description='Support me on Buy me a coffee!'
				data-message=''
				data-color='#ffdd00'
				data-position='Right'
				data-x_margin='18'
				data-y_margin='18'
			></script>
		</div>
	)
}
