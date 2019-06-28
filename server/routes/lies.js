const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getLies()
    .then(lies => {
      res.json(lies.map(lie => {
        return { message: lie.lie, value: 'lie' }
      }))
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addLie(req.body)
    .then(() => {
      res.status(201).send()
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


module.exports = router
