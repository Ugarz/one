import "./styles.scss"

export default class extends React.Component {
 render() {
   return <header>
    <h1 title="Developer Javascript (react, nodejs)">Reactive Web Developer</h1>
    <h2 title="Follow me on twitter">
        <a href="https://twitter.com/ArzurUgo">
        <span><em>Ugarz</em></span>
        <span><em>Ugarz</em></span>
        <span><em>Ugarz</em></span>
        </a>
    </h2>
    <ul className="working-at">
        <li>Developer at <a id="company" href="https://morning.com/">Morning</a></li>
        <li><a rel="me" title="Follow me on Twitter" href="https://twitter.com/ArzurUgo">🐦</a></li>
        <li><a rel="me" title="Contact me via Email" href="mailto:ugo.arzur@protonmail.com">👋🏻</a></li>
    </ul>
    <span className="again" onClick={() => "history.go(0)"} title="Reload page">ANIMATE !</span>
    </header>
 }
}