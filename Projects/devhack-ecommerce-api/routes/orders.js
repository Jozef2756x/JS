const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById
} = require('../controllers/orderController');

router.post('/:userId', createOrder);
router.get('/:userId', getUserOrders);
router.get('/order/:orderId', getOrderById);

module.exports = router;
