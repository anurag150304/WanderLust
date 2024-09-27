const errHandler = require('../utils/errHandler');
const { listingSchema } = require('../private/checkValidator');

module.exports.checkValidations = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(e => e.message).join(",");
        return next(new errHandler(400, errMsg));
    }
    return next();
}