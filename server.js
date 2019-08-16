// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    switch (req.method) {
        case 'GET':
        if (pathname === '/donation') {
            console.log('GET BODY', req.body)
            app.render(req, res, '/donation', query)
        } else {
            handle(req, res, parsedUrl)
        }
        
        break;
        case 'POST':
            console.log('POST BODY', req.body)
            handle(req, res, parsedUrl)
            break;
    
        default:
            break;
    }

  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})