const { reviwSchema } = require('../private/checkValidator');
const errHandler = require('../utils/errHandler');

module.exports.checkReviewValidations = (req, res, next) => {
    const { error } = reviwSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(e => e.message).join(",");
        return next(new errHandler(400, errMsg));
    }
    return next();
}