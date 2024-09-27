const listings = require('../models/listing');

module.exports.isOwner = async (req, res, next) => {
    const listOwner = await listings.findById(req.params.id);
    if (listOwner.owner) {
        if (!listOwner.owner._id.equals(res.locals.user._id)) {
            req.flash('error', "You don't have permission to do the changes");
            return res.redirect(`/listings/id=${req.params.id}`);
        }
    } else {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    next();
}