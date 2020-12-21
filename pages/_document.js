import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import fs from 'fs'
import path from 'path'

class InlineStylesHead extends Head {
	getCssLinks({ allFiles }) {
		return allFiles
			.filter(file => file.endsWith('.css'))
			.map(file => (
				<style
					key={file}
					nonce={this.props.nonce}
					dangerouslySetInnerHTML={{
						__html: fs.readFileSync(path.join('.next', file), 'utf-8')
					}}
				/>
			))
	}
}

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<InlineStylesHead />
				<body>
					<Main />
					{process.env.NODE_ENV === 'development' ? <NextScript /> : null}
				</body>
			</Html>
		)
	}
}

export default MyDocument
