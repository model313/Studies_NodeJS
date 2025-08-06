// User Model

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    // Instead of using this long regex, you can use a the validator library (npm install validator)
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide valid email'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    // maxlength: 12,
    // maxlength should be changed/removed if data is encrypted
  }
})

// Password Hashing pre middleware
// Use 'function' instead of '=>' for scope (prevents binding of 'this')
UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10)       // Generates random bytes (default is 10)
  this.password = await bcrypt.hash(this.password, salt)

  next()
})

// JWT instance method (mongoose built-in instance method)
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
}

module.exports = mongoose.model('User', UserSchema)