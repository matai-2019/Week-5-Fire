const server = require('./server')

const port = process.env.PORT || 4000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
