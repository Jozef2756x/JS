const express = require('express');
const router = express.Router();
const reviewService = require('../services/reviewService');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/', authenticate, async (req, res) => {
  try {
    const reviewData = {
      ...req.body,
      user_id: req.user.id,
    };
    const review = await reviewService.addReview(reviewData);
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/book/:bookId', async (req, res) => {
  const reviews = await reviewService.getReviewsForBook(req.params.bookId);
  res.json(reviews);
});

router.get('/user/:userId', async (req, res) => {
  const reviews = await reviewService.getReviewsByUser(req.params.userId);
  res.json(reviews);
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const updated = await reviewService.updateReview(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await reviewService.deleteReview(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
