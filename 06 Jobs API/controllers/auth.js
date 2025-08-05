// Auth Controller (Users)

const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  // Check if data exists
  // This is already covered with mongoose validators in User.js
  // const {name, email, password} = req.body
  // if(!name || !email || !password){
  //   throw new BadRequestError('Please provide name, email and password')
  // }

  // Create user
  /**
   * ... = Spread Operator
   * Unpacks all key-value pairs from the tempUser object and passes them as
   * individual properties to User.create()
   */
  const user = await User.create({ ...req.body })

  // JWT
  const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "30d", }
  )

  // Respond success
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token })
}

const login = async (req, res) => {
  res.send("login")
}

module.exports = {
  register,
  login,
}
