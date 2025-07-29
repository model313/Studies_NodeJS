// JWT Controller

/** 
 * 1. Check username, password in post request
 * 2. If exists, create new JWT
 * 3. Send token back to front-end
 * 4. Only request with JWT can access /dashboard
*/

const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const {username, password} = req.body

  // User validation (usually via Mongoose / Joi)
  // If input is empty
  if(!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
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
  // Should log all headers, including authorization
  // console.log(req.headers)

  // Get header
  const authHeader = req.headers.authorization
  
  // Empty/invalid header error
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    // Should be 401 error with invalid credentials msg
    throw new CustomAPIError('No token provided', 400)
  }

  // Parse authorization header
  const token = authHeader.split(' ')[1]
  
  // Verify token
  try {
    // Parse token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decoded)

    const luckyNumber = Math.floor(Math.random() * 100);
  
    res
      .status(200)
      .json({ msg: `Hello, ${decoded.username}`, secret: `Lucky number is: ${luckyNumber}`});
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route', 401)
  }
};

module.exports = {
  login, dashboard
}