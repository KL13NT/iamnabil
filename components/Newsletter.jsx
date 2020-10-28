import React from 'react'

export default function Newsletter() {
	return (
		<>
			<div
				id='mc_embed_signup'
				className='mt-12 bg-link rounded p-8 text-center md:text-left'
			>
				<form
					action='https://app.us2.list-manage.com/subscribe/post?u=74ad345e428279b3147350326&amp;id=cdc5fd5c4c'
					method='post'
					id='mc-embedded-subscribe-form'
					name='mc-embedded-subscribe-form'
					className='validate'
					target='_blank'
					noValidate
				>
					<div id='mc_embed_signup_scroll'>
						<h3 className='bg-transparent text-black text-center mt-4 mx-auto'>
							Want my latest articles?
						</h3>
						<p className='text-center mt-2'>Subscribe to my newsletter!</p>
						<div className='flex flex-wrap justify-evenly mt-4'>
							<div className='mc-field-group mt-4 lg:mt-0'>
								<label htmlFor='mce-FNAME' className='block'>
									First Name
								</label>
								<input
									required
									type='text'
									placeholder='John Wick'
									name='FNAME'
									className='bg-shadow text-white focus:shadow rounded border-2 outline-none p-3 focus:shadow-outline-indigo focus:border-indigo-300 placeholder-white'
									id='mce-FNAME'
								/>
							</div>
							<div className='mc-field-group mt-4 lg:mt-0'>
								<label htmlFor='mce-EMAIL' className='block'>
									Email Address
								</label>
								<input
									required
									type='email'
									placeholder='john.wick@thecontinental.org'
									name='EMAIL'
									className='bg-shadow text-white shadow rounded border-2 outline-none p-3 focus:shadow-outline-indigo focus:border-indigo-300 placeholder-white'
									id='mce-EMAIL'
								/>
							</div>
						</div>
						<div id='mce-responses' className='clear'>
							<div className='response hidden' id='mce-error-response'></div>
							<div className='response hidden' id='mce-success-response'></div>
							<div className='invisible' aria-hidden='true'>
								<input
									type='text'
									name='b_74ad345e428279b3147350326_cdc5fd5c4c'
									tabIndex='-1'
									className='hidden'
								/>
							</div>
							<div className='clear'>
								<input
									type='submit'
									value='Subscribe'
									name='subscribe'
									id='mc-embedded-subscribe'
									className='bg-shadow text-white shadow rounded border-2 outline-none p-3 focus:shadow-outline-indigo focus:border-indigo-300 cursor-pointer mt-8 mx-auto block'
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
