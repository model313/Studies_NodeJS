// JWT Controller

/** 
 * 1. Check username, password in post request
 * 2. If exists, create new JWT
 * 3. Send token back to front-end
 * 4. Only request with JWT can access /dashboard
*/

const {BadRequestError} = require('../errors')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const {username, password} = req.body

  // User validation (usually via Mongoose / Joi)
  // If input is empty
  if(!username || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  // User ID placeholder (usually called from DB)
  const id = new Date().getDate()


  // Create JWT
  // Light payload is best for performance
  // Secret key should be long, complex string value
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
  
  // Return status and token
  res.status(200).json({msg: 'User Created', token})
};

/**
 * In this project, the front-end will recieve the signed token 
 * and store it in local storage. Note that there are several other ways 
 * to store a JWT, all with pros and cons. 
 * 
 * The front-end will then add a request header whenever it needs to:
 * Authorization: Bearer ${token}
 * 
 * Remember to add this header in Postman when testing.
 */

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({
      msg: `Hello, ${req.user.username}`,
      secret: `Lucky number is: ${luckyNumber}`,
    });
};

module.exports = {
  login, dashboard
}