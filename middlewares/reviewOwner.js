const reviews = require('../models/reviews');

module.exports.revOwner = async (req, res, next) => {
    let { id, rev } = req.params;
    const revAuthor = await reviews.findById(rev);
    if (!revAuthor.author._id.equals(res.locals.user._id)) {
        req.flash('error', "You are not the owner of this review");
        return res.redirect(`/listings/id=${id}`);
    }
    next();
}