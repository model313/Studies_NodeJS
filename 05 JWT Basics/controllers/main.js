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
  
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: "Hello", secret: `Lucky number is: ${luckyNumber}`});
};

module.exports = {
  login, dashboard
}