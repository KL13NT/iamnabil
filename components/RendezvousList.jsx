import { useCollapse } from 'react-collapsed'
import { useState } from 'react'

const formatDuration = duration => {
	const { format: f } = Intl.NumberFormat('ar-EG')

	const durationRegex = /(\d{2}):(\d{2}):(\d{2})/
	const [, , minutes, seconds] = durationRegex.exec(duration)

	return `${f(minutes)}:${f(seconds)}`
}

const Item = ({ item, id, expanded, setExpanded }) => {
	const { getCollapseProps, getToggleProps } = useCollapse({
		isExpanded: Boolean(expanded) && id === expanded
	})

	return (
		<li className='list-none m-0 p-0 border-b-[1px] transition-colors transition-duration-200 border-ie-gray-800 hover:border-transparent'>
			<button
				{...getToggleProps({
					onClick: () => setExpanded(id)
				})}
				data-active={expanded === id}
				className='w-full text-3xl py-8 px-4 flex justify-between gap-2 flex-wrap text-right font-bold transition-colors transition-duration-200 hover:bg-[#ebebeb] data-[active=true]:bg-[#ebebeb] rounded'
			>
				<span className='md:max-w-[90%]'>{item.title}</span>
				<span className='text-2xl font-normal'>
					{formatDuration(item['itunes:duration'])}
				</span>
			</button>
			<div {...getCollapseProps()} className='px-4'>
				<article dangerouslySetInnerHTML={{ __html: item.description }} />
				{expanded === id && (
					<iframe
						src={`https://podcasters.spotify.com/pod/show/nabil-tharwat/embed/episodes/${id}`}
						className='h-[100px] md:h-[161px] w-full mt-12 mb-8'
						height='161px'
						width='800px'
						border='0'
					></iframe>
				)}
			</div>
		</li>
	)
}

const RendezvousList = ({ items }) => {
	const [expanded, setExpanded] = useState(null)

	const toggle = id => {
		if (id === expanded) setExpanded(null)
		else setExpanded(id)
	}

	return (
		<ul className='p-0'>
			{items.map(item => {
				const {
					groups: { id }
				} = item.link.match(
					/^https:\/\/podcasters.spotify.com\/pod\/show\/nabil-tharwat\/episodes\/(?<id>.+)$/i
				)

				return (
					<Item
						key={id}
						id={id}
						item={item}
						expanded={expanded}
						setExpanded={toggle}
					/>
				)
			})}
		</ul>
	)
}

export default RendezvousList
