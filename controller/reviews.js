const reviews = require('../models/reviews');
const listings = require('../models/listing');

module.exports.postReviews = async (req, res, next) => {
    const listing = await listings.findById(req.params.id);
    const newReview = new reviews({ author: req.user._id, comment: req.body.reviews.comment, rating: req.body.reviews.rating });
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash('success', 'Review Added');
    res.redirect(`/listings/id=${listing._id}`);
}

module.exports.deleteReviews = async (req, res, next) => {
    await reviews.findByIdAndDelete(req.params.rev);
    await listings.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.rev } });
    req.flash('success', 'Review Deleted');
    res.redirect(`/listings/id=${req.params.id}`);
}