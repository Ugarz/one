import 'isomorphic-fetch'
import Link from 'next/link'

import Providers from '../resources/helpers/providers'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Github from '../components/Github/Github'

import "../resources/scss/global.scss"
import "../resources/scss/basic.scss"
import "../resources/scss/media780.scss"
import "../resources/scss/animations.scss"

export default class extends React.Component {
    // static async getInitialProps() {
    //     const res = await fetch('https://api.github.com/users/Ugarz/repos')
    //     const projects = await res.json()
    //     const projectsCleaned = Providers.formatGithubResponse(projects)
    //     return projectsCleaned;
    // }
    render() {
        return <Layout title="Latest News">
            <Header />
            <main className="projects-wrapper">
                <h3>Some of my projects</h3>
                {/* <Github users={this.props.users} /> */}
            </main>
            <style jsx>{`
            h1 {
                font-weight: 300;
                color: #333;
            }
            `}</style>
            <style global jsx>{`
            @media all and (max-width: 780px) {
                body{
                  background-size: 200% 200%;
                  animation: border 10s linear infinite;
                }
                header {
                  margin-top: 2em;
                }
                h1 {
                  font-size: 6vw;
                  line-height: 7.5vw;
                  padding-left: 5vw; }
              
                ul.projects div.card header {
                    margin: 0;
                }
                div.projects-wrapper {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                }
                ul.projects {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                }
                ul.projects a {
                  width: 100%;
                }
                ul.projects li.card {
                  box-shadow: 5px 5px 3px #aaadba;
                }
                ul.working-at li {
                  font-size: 2em;
                  align-self: center;
                }
              }
              @keyframes intro {
                0%, 75% {
                  transform: translateX(-100vw);
                }
                100% {
                  transform: translateX(0);
                }
            }
            @keyframes fade {
                0%, 75% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            @keyframes reveal {
                0%,
                50% {
                    opacity: 0;
                    width: 0;
                }
                100% {
                    opacity: 1;
                    width: 100%;
                }
            }
            @keyframes border {
                0% {
                    background-position: 0 0; }
            
                20% {
                    background-position: 100% 0; }
            
                40% {
                    background-position: 100% 100%; }
            
                60% {
                    background-position: 0 100%; }
            
                100% {
                    background-position: 0 0; }
            }
            @keyframes hi {
                0%,
                80% {
                    transform: rotate(9deg) translate(0, 0); }
            
                85% {
                    transform: rotate(24deg) translate(0.33333vw, -0.25vw); }
            
                90% {
                    transform: rotate(9deg) translate(0, 0); }
            
                95% {
                    transform: rotate(24deg) translate(0.33333vw, -0.25vw); }
            
                100% {
                    transform: rotate(9deg) translate(0, 0); } }            
            `}</style>
        </Layout>
      }
   }
   