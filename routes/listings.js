const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudConfig');
const upload = multer({ storage });
const asyncWrap = require('../utils/asyncWrap');
const { isLoggedIn } = require('../middlewares/authorizor');
const { checkValidations } = require('../middlewares/listingValidator');
const { isOwner } = require('../middlewares/ownerValidator');
const { index, viewPage, createPage, editPage, putEdit, deleteListing, categoryListings, searchListing } = require('../controller/listings');

router.get('/', asyncWrap(index));

router.route('/new')
    .get(isLoggedIn, (req, res) => res.render('listings/newList'))
    .post(isLoggedIn, checkValidations, upload.single('listings[image]'), asyncWrap(createPage));

router.get('/id=:id/edit', isLoggedIn, isOwner, asyncWrap(editPage));
router.get('/category=:ctg', asyncWrap(categoryListings));
router.get('/search', asyncWrap(searchListing));

router.route('/id=:id')
    .get(asyncWrap(viewPage))
    .put(isLoggedIn, isOwner, upload.single('listings[image]'), asyncWrap(putEdit))
    .delete(isLoggedIn, isOwner, asyncWrap(deleteListing));

module.exports = router;