const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listings: Joi.object({
        title: Joi.string()
            .min(3)
            .max(200)
            .required()
            .messages({
                'string.base': 'Title must be a string',
                'string.empty': 'Title cannot be empty',
                'string.min': 'Title should have at least 3 characters',
                'string.max': 'Title should have less than 100 characters',
                'any.required': 'Title is required'
            }),

        image: Joi.any()
            .required()
            .messages({ 'any.required': 'Image is required' }),

        description: Joi.string()
            .max(200)
            .required()
            .messages({
                'string.max': 'Description cannot be longer than 200 characters',
                'string.empty': 'Description cannot be empty',
                'any.required': 'Description is required',
            }),

        category: Joi.string()
            .required()
            .messages({ 'any.required': 'Category is required' }),

        price: Joi.number()
            .min(0)
            .required()
            .messages({
                'number.base': 'Price must be a number',
                'number.min': 'Price must be at least 0',
                'any.required': 'Price is required'
            }),

        location: Joi.string()
            .required()
            .messages({
                'string.base': 'Location must be a string',
                'string.empty': 'Location cannot be empty',
                'any.required': 'Location is required'
            }),

        country: Joi.string()
            .required()
            .messages({
                'string.base': 'Country must be a string',
                'string.empty': 'Country cannot be empty',
                'any.required': 'Country is required'
            }),
    })
});

module.exports.reviwSchema = Joi.object({
    reviews: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5)
    }).required()
});