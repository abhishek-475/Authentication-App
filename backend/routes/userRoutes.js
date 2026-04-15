const express = require('express')
const { signup, login, getUser, updateUser } = require('../controllers/userController')

const router = express.Router()

router.post('/signup', signup); 
router.post('/login', login);
router.get('/me', getUser);  // Get current user
router.put('/update', updateUser);  // Update user

module.exports = router;