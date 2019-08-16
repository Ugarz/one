import Link from 'next/link'

function Github({ projects }){
    console.log(':: Github projects', projects)
    return <ul>
            { projects.map((project, index) => (
                <li key={index}>
                    <Link as={`/p/${project.name}`} href={project.url}  target="_blank">
                        <a>
                            <div className="card">
                                <header>
                                    <h4 className="fullname">&#9874; {project.fullName}</h4>
                                    <img className="avatar" src={project.owner.avatar_url}/>
                                </header>
                                <p className="description">{project.description}</p>
                                <span className="stars">{project.stargazers_count}&#9733;</span>
                                <span className="language">{project.language}</span>
                            </div>
                        </a>
                    </Link>
                </li>
            )) }
        </ul>
}

    
Github.getInitialProps = async ({ req }) => {
    console.log(req)
    const res = await fetch('https://api.github.com/users/Ugarz/repos')
    console.log('res', res)
    const projects = await res.json()
    console.log('projects', projects)
    const projectsCleaned = Providers.formatGithubResponse(projects)
    console.log('projectsCleaned', projectsCleaned)
    return {
        projects
    };
}

export default Github;
