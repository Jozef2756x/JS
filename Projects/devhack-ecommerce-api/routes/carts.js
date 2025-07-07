const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
  deleteCart
} = require('../controllers/cartController');

router.post('/:userId/add', addToCart);
router.get('/:userId', getCart);
router.put('/:userId/remove', removeFromCart);
router.delete('/:userId', deleteCart);

module.exports = router;
