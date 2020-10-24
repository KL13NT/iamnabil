import React from 'react'

import Navbar from './Navbar'

const Layout = ({ children }) => (
	<>
		<div className='bg-accent font-display p-12'>
			<Navbar />
			<div className='w-3/5 mx-auto mt-24'>{children}</div>
		</div>
	</>
)

export default Layout
