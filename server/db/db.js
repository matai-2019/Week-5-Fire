const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
<<<<<<< HEAD
  getLies
}

function getLies(db = connection) {
  return db('lies').select()
}

=======
  getlies(db = connection) {
    return db('lies').select()
  },
  addLie(newLie, db=connection){
    return db('lies')
    .insert(newLie)
  }
}
>>>>>>> e5ed370c78b63be2601f36755b403a92869783f6
