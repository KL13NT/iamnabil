import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		const isDev = String(process.env.NODE_ENV).toLowerCase() === 'development'
		return (
			<Html>
				<Head />
				<body>
					<Main />
					{isDev ? <NextScript /> : null}
				</body>
			</Html>
		)
	}
}

export default MyDocument
