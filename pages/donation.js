import 'isomorphic-unfetch'
import Link from 'next/link'

import Providers from '../resources/helpers/providers'
import Layout from '../components/Layout'

export default class extends React.Component {
	render() {
		return (
			<Layout title="Latest News">
				<main className="projects-wrapper">
					<h3>Merci !</h3>
					<Link href="/">
						<a>Home</a>
					</Link>
				</main>
			</Layout>
		)
	}
}
