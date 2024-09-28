const listings = require('../models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_ACCESS_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res, next) => {
    const allListings = await listings.find({});
    res.render('listings/index', { DATA: allListings });
}

module.exports.viewPage = async (req, res, next) => {
    const value = await listings.findById(req.params.id).populate('owner').populate({ path: 'reviews', populate: 'author' });
    if (!value) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
    res.render('listings/view', { DATA: value });
}

module.exports.createPage = async (req, res, next) => {
    const response = await geocodingClient.forwardGeocode({ query: req.body.listings.location, limit: 1 }).send();
    const DATA = new listings({
        title: req.body.listings.title,
        description: req.body.listings.description,
        image: { filename: req.file.filename, url: req.file.path },
        price: req.body.listings.price,
        category: req.body.listings.category,
        location: req.body.listings.location,
        country: req.body.listings.country,
        geometry: response.body.features[0].geometry,
        owner: req.user._id
    });
    await DATA.save();
    req.flash('success', 'Listing added successfully');
    res.redirect('/listings');
}

module.exports.editPage = async (req, res, next) => {
    const value = await listings.findById(req.params.id);
    if (value) {
        res.render('listings/edit', { DATA: value });
    }
    else {
        req.flash('error', 'Listing not found');
        return res.redirect('/listings');
    }
}

module.exports.putEdit = async (req, res, next) => {
    const value = await listings.findByIdAndUpdate(req.params.id, req.body.listings, { runValidators: true });
    if (req.file) {
        value.image = { filename: req.file.filename, url: req.file.path };
        await value.save();
    }
    res.redirect(`/listings/id=${req.params.id}`);
}
module.exports.deleteListing = async (req, res, next) => {
    const value = await listings.findByIdAndDelete(req.params.id);
    if (value) {
        req.flash('success', 'Listing Deleted');
    }
    else {
        req.flash('error', 'Listing not found');
    }
    res.redirect('/listings');
}

module.exports.categoryListings = async (req, res, next) => {
    const values = await listings.find({ category: req.params.ctg });
    res.render('listings/categories', { DATA: values });
}

module.exports.searchListing = async (req, res, next) => {
    const values = await listings.find({ location: req.query.dest });
    res.render('listings/search', { DATA: values });
}
