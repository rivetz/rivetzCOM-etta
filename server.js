/**
 * Server Logic
 */

const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('./i18n')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.set('port', process.env.PORT || 8081)
    server.use(nextI18NextMiddleware(nextI18next))

    // Dev environment whitelist. Add your local env to avoid https redir
    const localDev = [
      'localhost:8081'
    ]

    // Force HTTPS if we're outside dev envs. This should already be handled by CDN, but just in case.
    // Adds/modifies headers
    function forceSSL (req, res, next) {
      if (req.headers['x-forwarded-proto'] === 'https' || localDev.includes(req.headers.host)) {
        if (!localDev.includes(req.headers.host)) {
          res.setHeader('X-Frame-Options', 'SAMEORIGIN')
          res.setHeader('X-Powered-By', 'Electricity (duh)')
          res.setHeader('Cache-Control', 'max-age=7200, public')
          res.setHeader('Content-Security-Policy', "default-src 'self' *.rivetz.com *.rivetzintl.com *.google-analytics.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.fontawesome.com *.youtube-nocookie.com *.youtube.com; style-src 'self' 'unsafe-inline' *.rivetz.com *.rivetzintl.com *.google-analytics.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.fontawesome.com *.youtube-nocookie.com *.youtube.com; style-src-elem 'self' 'unsafe-inline' *.rivetz.com *.rivetzintl.com *.google-analytics.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.fontawesome.com *.youtube-nocookie.com *.youtube.com")
          res.setHeader('Referrer-Policy', 'no-referrer')
          res.setHeader('Feature-Policy', "microphone 'none'; payment 'none'; sync-xhr 'self' https://rivetz.com")
          res.setHeader('X-XSS-Protection', '1; mode=block')
          res.setHeader('X-Content-Type-Options', 'nosniff')
          res.setHeader('Server', 'Some Potato Somewhere')
        }
        return next()
      }
      res.redirect('https://' + req.headers.host)
    }

    server.all('*', forceSSL)

    /**
     * Routes
     */

    // Handle all other requests as local /pages (home, about, etc)
    server.get('*', (req, res) => handle(req, res))

    /**
     * Init
     */
    server.listen(server.get('port'), (err) => {
      if (err) throw err
      console.log('Server listening on port ' + server.get('port'))
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
