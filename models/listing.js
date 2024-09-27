const mongoose = require('mongoose');
const Reviews = require('./reviews');

const listingSchema = new mongoose.Schema
    (
        {
            title: {
                type: String,
                index: true,
                required: true
            },

            description: {
                type: String,
                index: true,
                max: 100
            },

            image: {
                filename: {
                    type: String,
                    default: "no-img"
                },

                url: {
                    type: String,
                    set: v => (v === "" || v === null) ? "/svg/no-image.svg" : v,
                    default: "/svg/no-image.svg"
                }
            },

            price: {
                type: Number,
                required: true
            },

            category: {
                type: String,
                enum: ['Amazing Pools', 'Farms', 'Amazing views', 'National park', 'Camping', 'Rooms', 'Cabins', 'Treehouses', 'OMG', 'Luxurious'],
                required: true
            },

            location: {
                type: String,
                required: true
            },

            country: {
                type: String,
                required: true
            },

            geometry: {
                type: {
                    type: String, // Don't do `{ location: { type: String } }`
                    enum: ['Point'], // 'location.type' must be 'Point'
                    required: true
                },
                coordinates: {
                    type: [Number],
                    required: true
                }
            },

            owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },

            reviews: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review'
            }]
        }
    )

listingSchema.post('findOneAndDelete', async (data) => {
    if (data) {
        await Reviews.deleteMany({ _id: { $in: data.reviews } });
    }
});

const listings = mongoose.model('Listing', listingSchema);
module.exports = listings;