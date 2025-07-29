// JWT Routes

const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

const authMiddleware = require('../middleware/auth')
// Usually group restricted endpoints 

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router