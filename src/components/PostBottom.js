import React from 'react'

const PostBottom = ({ lang, languageClass }) => 
	lang === 'en' ? 
		<p className={languageClass}>If you liked this article make sure to share it with your friends, and if you have any questions or want to see more like this make sure to follow me on Twitter <a href="Https://twitter.com/Nabil_Tharwat16">@Nabil_Tharwat16</a> or join in on the fun in our Discord server <a href="https://discord.gg/xrGAnTg">Valarium</a>.</p>
		: <p className={languageClass}>لو عندكوا اسئلة او عايزين يوصلكوا اخباري اول بأول تقدروا تتابعوني على تويتر <a href="Https://twitter.com/Nabil_Tharwat16">@Nabil_Tharwat16</a> او تنضموا لسيرفر ديسكورد <a href="https://discord.gg/xrGAnTg">Valarium</a>.</p>

export { PostBottom }