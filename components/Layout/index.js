import Head from 'next/head'

export default class extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>{this.props.title}</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta name="theme-color" content="#ff6600" />
					<link rel="apple-touch-icon" href="/static/icon.png" />
					<meta name="apple-mobile-web-app-title" content="Hacker News" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />

					<meta name="author" content="Ugo Arzur" />
					<meta name="robots" content="All" />
					<meta name="revisit-after" content="1 month" />
					<meta name="rating" content="General" />
					<meta name="Content-language" content="english" />
					<meta
						name="description"
						content="Personal homepage for Ugo Arzur, web developer. Maker."
					/>
					<meta
						name="keywords"
						content="developer, javascript, coder, code, react, microservices, node, nodejs, toulouse"
					/>
					<meta name="theme-color" content="#303239" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Ugo Arzur" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@ArzurUgo" />
					<meta name="twitter:creator" content="@ArzurUgo" />
					<meta
						name="twitter:url"
						property="og:url"
						content="https://ugoarzur.fr"
					/>
					<meta name="twitter:image:width" content="1000" />
					<meta name="twitter:image:height" content="1000" />
					<meta
						name="twitter:image"
						property="og:image"
						content="https://ugoarzur.fr/static/preview.png"
					/>
					<meta name="twitter:title" property="og:title" content="Ugo Arzur" />
					<meta
						name="twitter:description"
						property="og:description"
						content="Personal homepage for Ugo Arzur, web developer. Maker."
					/>
					{/* <link rel="stylesheet" type="text/css" href="assets/css/app.css" media="screen" /> */}
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:700i,800i"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Yellowtail"
						rel="stylesheet"
					/>
				</Head>

				{this.props.children}
			</div>
		)
	}
}
