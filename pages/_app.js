import Layout from '../components/Layout'

import '../styling/index.sass'

export default function Blog({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
