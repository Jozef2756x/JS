const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { validateUserRegistration, validateLogin } = require('../middlewares/validation');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/register', validateUserRegistration, async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/login', validateLogin, async (req, res) => {
  try {
    const { user, token } = await userService.loginUser(req.body);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authenticate, async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
