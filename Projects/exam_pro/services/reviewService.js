const reviewModel = require('../models/reviewModel');

async function addReview(reviewData) {
  return await reviewModel.createReview(reviewData);
}

async function getReviewsForBook(bookId) {
  return await reviewModel.getReviewsByBook(bookId);
}

async function getReviewsByUser(userId) {
  return await reviewModel.getReviewsByUser(userId);
}

async function updateReview(id, reviewData) {
  return await reviewModel.updateReview(id, reviewData);
}

async function deleteReview(id) {
  return await reviewModel.deleteReview(id);
}

module.exports = { addReview, getReviewsForBook, getReviewsByUser, updateReview, deleteReview };
