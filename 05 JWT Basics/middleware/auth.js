// Auth Middleware
// This will be called in the router whenever needed

const { UnauthenticatedError } = require('../errors')
const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
  // Should log all headers, including authorization
  // console.log(req.headers)

  // Get header
  const authHeader = req.headers.authorization
  
  // Empty/invalid header error
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    // Should be 401 error with invalid credentials msg
    throw new UnauthenticatedError('No token provided')
  }

  // Parse authorization header
  const token = authHeader.split(' ')[1]

  // Verify token
  try {
    // Parse token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const {id, username} = decoded

    // Save user details to request property
    req.user = {id, username}

    next()
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route')
  }


}

module.exports = authenticationMiddleware