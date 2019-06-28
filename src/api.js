import request from 'superagent'
const url = 'https://api.tronalddump.io/random/quote'

export function getQuotes () {
  return new Promise((resolve, reject) => {
    request.get(url).end((error, res) => {
      error ? reject(error) : resolve(res.body.value)
    })
  })
}