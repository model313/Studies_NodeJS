// Auth Controller (Users)

const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError } = require("../errors")

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
  const { email, password } = req.body

  // Empty value validation
  // This is not covered gracefully with mongoose validators (Shows undefined 500 error)
  // There will be other ways to handle validation
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password")
  }

  // Compare email
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials')
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials')
  }
  
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })


}

module.exports = {
  register,
  login,
}
