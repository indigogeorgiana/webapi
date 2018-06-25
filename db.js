const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function createUser (newUser, testDb) {
  const db = testDb || connection
  return db('users').insert(newUser)
}

function updateUser (updatedUser, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', updatedUser.id)
    .update(updatedUser)
}
function deleteUser (id, testDb) {
  const db = testDb || connection
  return db('users')
    .where('id', id)
    .del()
}
