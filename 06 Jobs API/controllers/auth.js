// Auth Controller (Users)

const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError} = require('../errors')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  // Check if data exists
  // This is already covered with mongoose validators in User.js
  // const {name, email, password} = req.body
  // if(!name || !email || !password){
  //   throw new BadRequestError('Please provide name, email and password')
  // }

  // Extract elements from body
  const {name, email, password} = req.body

  // Hash password
  const salt = await bcrypt.genSalt(10)   // Generates random bytes (default is 10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create temporary object
  const tempUser = {name, email, password:hashedPassword}

  // Create user
  /**
   * ... = Spread Operator
   * Unpacks all key-value pairs from the tempUser object and passes them as 
   * individual properties to User.create()
   */
  const user = await User.create({...tempUser})

  // Respond success
  res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) => {
  res.send('login')
}

module.exports = {
  register,
  login,
}

