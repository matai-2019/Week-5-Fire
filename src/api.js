import request from 'superagent'
const url = 'https://api.tronalddump.io/random/quote'

export function getQuotes () {
  return request  
    .get(url)
    .then(res => {
      console.log(res)
    })
}
