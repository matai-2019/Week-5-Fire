const express = require('express')
const router = express.Router()

const request = require('superagent')
const url = 'https://api.tronalddump.io/random/quote'

router.get('/', (req, res) => {
  request.get(url).then(response => {
    res.json({message: response.body.value, value: 'trump'})
  }).catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router
