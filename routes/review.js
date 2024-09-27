const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncWrap = require('../utils/asyncWrap');
const { isLoggedIn } = require('../middlewares/authorizor');
const { checkReviewValidations } = require('../middlewares/reviewValidator');
const { revOwner } = require('../middlewares/reviewOwner');
const { postReviews, deleteReviews } = require('../controller/reviews');

router.post('/reviews', isLoggedIn, checkReviewValidations, asyncWrap(postReviews));
router.delete('/review=:rev', isLoggedIn, revOwner, asyncWrap(deleteReviews));

module.exports = router;