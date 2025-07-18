const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { JWT_SECRET } = require('../config/config');

const SALT_ROUNDS = 10;

async function registerUser({ email, password, name, is_admin = false }) {
  const existingUser = await userModel.getUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await userModel.createUser({ email, password: hashedPassword, name, is_admin });
  return user;
}

async function loginUser({ email, password }) {
  const user = await userModel.getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid email or password');
  }

  const payload = { id: user.id, email: user.email, name: user.name, is_admin: user.is_admin };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  return { user, token };
}

async function getAllUsers() {
  return await userModel.getAllUsers();
}

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
};
