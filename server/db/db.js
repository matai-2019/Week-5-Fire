const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLies(db = connection) {
    return db('lies').select()
  },
  addLie(newLie, db=connection){
    return db('lies')
    .insert(newLie)
  }
}
