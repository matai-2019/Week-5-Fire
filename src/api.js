import request from 'superagent'
const url = '/api/v1/trump'
const ourSweetApi = '/api/v1/lies'

export function getQuotes () {
  return new Promise((resolve, reject) => {
    request.get(url).end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}

export function getLies () {
  return new Promise((resolve, reject) => {
    request.get(ourSweetApi).end((error, res) => {
      error ? reject(error) : resolve(res.body)
    })
  })
}