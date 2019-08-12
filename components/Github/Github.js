export default function Github(props) {
    return(
        <ul>
            { props.projects.map((project, index) => (
                <li key={index}>
                    <a href={project.url} target="_blank">
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
                </li>
            )) }
        </ul>
    )
}