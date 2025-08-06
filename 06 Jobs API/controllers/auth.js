// Auth Controller (Users)

const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  // Empty value validation
  // This is already covered with mongoose validators in User.js
  // const {name, email, password} = req.body
  // if(!name || !email || !password){
  //   throw new BadRequestError('Please provide name, email and password')
  // }

  /**
   * ... = Spread Operator
   * Unpacks all key-value pairs from the tempUser object and passes them as
   * individual properties to User.create()
   */

  // Create user
  const user = await User.create({ ...req.body })

  // Invoke instance method (../models/User.js)
  const token = user.createJWT()

  // Respond success
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  res.send("login")
}

module.exports = {
  register,
  login,
}
