import Link from 'next/link'

const Github = props => {
	const isEmpty =
		Array.isArray(props.projects) && Object.keys(props.projects) == 0
	return (
		<div>
			<h1>Some of my projects</h1>
			{props.projects && !isEmpty && (
				<ul className="projects">
					{props.projects.data.map((p, k) => (
						<a key={k} href={p.html_url} target="_blank">
							<div class="card">
								<header>
									<h4 class="fullname">&#9874; {p.fullName}</h4>
									<img class="avatar" src="{p.owner.avatar_url}" />
								</header>
								<p class="description">{p.description}</p>
								<span class="stars">{p.stargazers_count}&#9733;</span>
								<span class="language">{p.language}</span>
							</div>
						</a>
					))}
				</ul>
			)}

			<style jsx>{`
				ul.projects div.card {
					box-shadow: 5px 5px 3px #333b52;
					padding: 0.7em;
					background-color: white;
					border-radius: 3px;
					display: flex;
					flex-direction: column;
				}
				ul.projects div.card header {
					/* background-color: red; */
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				ul.projects div.card:hover {
					background-color: #e0e1e7;
				}
				ul.projects div.card h4:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	)
}

export default Github
