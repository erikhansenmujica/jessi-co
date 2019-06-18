const S = require('sequelize');

const db = require('../db');

const User = db.define('users', {
  name: { 
    type: S.STRING,
  },
  lastname : {
      type: S.STRING
  },
  admin : {
      type : S.BOOLEAN
  }
})

User.hasMany(Order)

module.exports = User
