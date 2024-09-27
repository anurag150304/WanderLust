const mongoose = require('mongoose');
const listings = require('../models/listing');
main().then(() => console.log('connection successfull')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}


const sampleListings = [
    {
        title: 'Luxury Beach House',
        description: 'A beautiful beach house with stunning ocean views.',
        image: {
            filename: 'beach-house',
            url: 'https://res.cloudinary.com/mountaindiaries/image/upload/v1556801156/property/dcrfbjyufihgyasgnrvy.webp',
        },
        price: 1500,
        category: 'Amazing views',
        location: 'Miami, Florida',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-80.191788, 25.761681],
        },
        owner: "66f52d37c4310986adbb805e",
        reviews: [],
    },
    {
        title: 'Cozy Farm Cottage',
        description: 'A cozy cottage on a working farm with lots of fresh produce.',
        image: {
            filename: 'farm-cottage',
            url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
        },
        price: 1200,
        category: 'Farms',
        location: 'Lancaster, Pennsylvania',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-76.305514, 40.037876],
        },
        owner: "66f52d37c4310986adbb805f",
        reviews: [],
    },
    {
        title: 'Mountain Cabin',
        description: 'Rustic cabin in the mountains with breathtaking views.',
        image: {
            filename: 'mountain-cabin',
            url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-36069383/original/9a94e2d0-44b4-4f8d-8731-9b90f1604fa2.jpeg?im_w=1200',
        },
        price: 1800,
        category: 'National park',
        location: 'Aspen, Colorado',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-106.837002, 39.191098],
        },
        owner: "66f52d37c4310986adbb805b",
        reviews: [],
    },
    {
        title: 'Treehouse Escape',
        description: 'Stay in a cozy treehouse high in the treetops.',
        image: {
            filename: 'treehouse',
            url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        },
        price: 2000,
        category: 'Camping',
        location: 'Portland, Oregon',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-122.676483, 45.523064],
        },
        owner: "66f52d37c4310986adbb805c",
        reviews: [],
    },
    {
        title: 'Downtown Loft',
        description: 'Modern loft in the heart of downtown.',
        image: {
            filename: 'downtown-loft',
            url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
        },
        price: 1700,
        category: 'Rooms',
        location: 'New York, New York',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-73.935242, 40.730610],
        },
        owner: "66f52d37c4310986adbb805d",
        reviews: [],
    },
    {
        title: 'Desert Villa',
        description: 'Experience the quiet and calm of the desert in this luxurious villa.',
        image: {
            filename: 'desert-villa',
            url: 'https://westernartandarchitecture.com/wp-content/uploads/2020/05/A_Sonoran_Villa_JJ_20-2.jpg',
        },
        price: 3000,
        category: 'Amazing views',
        location: 'Palm Springs, California',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-116.545292, 33.830296],
        },
        owner: "66f52d37c4310986adbb8060",
        reviews: [],
    },
    {
        title: 'Mountain Lodge',
        description: 'A peaceful mountain lodge surrounded by nature.',
        image: {
            filename: 'mountain-lodge',
            url: 'https://redmountainalpinelodge.com/wp-content/uploads/revslider/private-room/living.room_.bigger-768x512.jpg',
        },
        price: 2500,
        category: 'National park',
        location: 'Yellowstone, Wyoming',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-110.588455, 44.4280],
        },
        owner: "66f52d37c4310986adbb8061",
        reviews: [],
    },
    {
        title: 'Lakeside Cabin',
        description: 'Relax in this serene lakeside cabin with breathtaking water views.',
        image: {
            filename: 'lakeside-cabin',
            url: 'https://i.pinimg.com/564x/ff/ee/36/ffee364e5b322774ebee93727b9e950d.jpg',
        },
        price: 1700,
        category: 'Camping',
        location: 'Lake Tahoe, California',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-120.0000, 39.0968],
        },
        owner: "66f52d37c4310986adbb8062",
        reviews: [],
    },
    {
        title: 'Urban Penthouse',
        description: 'Live the high life in this penthouse with sweeping city views.',
        image: {
            filename: 'urban-penthouse',
            url: 'https://img.freepik.com/premium-photo/urban-penthouse_1254992-121045.jpg?w=826',
        },
        price: 3200,
        category: 'Amazing views',
        location: 'Chicago, Illinois',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-87.629799, 41.878113],
        },
        owner: "66f52d37c4310986adbb8063",
        reviews: [],
    },
    {
        title: 'Seaside Cottage',
        description: 'A quiet seaside retreat perfect for a relaxing getaway.',
        image: {
            filename: 'seaside-cottage',
            url: 'https://cdn.onekindesign.com/wp-content/uploads/2017/05/Elegant-Seaside-Cottage-Whipple-Callender-Architects-01-1-Kindesign.jpg',
        },
        price: 1600,
        category: 'Amazing views',
        location: 'Cape Cod, Massachusetts',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-70.2061, 41.6688],
        },
        owner: "66f52d37c4310986adbb8064",
        reviews: [],
    },
    {
        title: 'Lake House',
        description: 'A spacious house on a peaceful lakefront property.',
        image: {
            filename: 'lake-house',
            url: 'https://culturizm.com/wp-content/uploads/2024/02/modern_lake_house.png.webp',
        },
        price: 2200,
        category: 'Amazing views',
        location: 'Lake George, New York',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-73.7245, 43.4262],
        },
        owner: "66f52d37c4310986adbb8065",
        reviews: [],
    },
    {
        title: 'Countryside Farmhouse',
        description: 'A traditional farmhouse located in the rolling hills.',
        image: {
            filename: 'countryside-farmhouse',
            url: 'https://a0.muscache.com/im/pictures/460c4006-f703-471e-b833-0891ef56cc4a.jpg?im_w=1200',
        },
        price: 2000,
        category: 'Farms',
        location: 'Nashville, Tennessee',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-86.7816, 36.1627],
        },
        owner: "66f52d37c4310986adbb8066",
        reviews: [],
    },
    {
        title: 'Cliffside Retreat',
        description: 'Stay perched on the edge of a cliff with unparalleled ocean views.',
        image: {
            filename: 'cliffside-retreat',
            url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/576243812.jpg?k=b3efced4efd588301b3aa99bee344cb95fa36943a21000a47dfc1c4dfe6b8c38&o=&hp=1',
        },
        price: 3500,
        category: 'Amazing views',
        location: 'Big Sur, California',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-121.8023, 36.2704],
        },
        owner: "66f52d37c4310986adbb8067",
        reviews: [],
    },
    {
        title: 'Cabin in the Woods',
        description: 'Enjoy solitude in this secluded cabin deep in the woods.',
        image: {
            filename: 'cabin-in-woods',
            url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/64/1a/36/walnut-cabin.jpg?w=1400&h=-1&s=1',
        },
        price: 1400,
        category: 'Camping',
        location: 'Smoky Mountains, Tennessee',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-83.5070, 35.6118],
        },
        owner: "66f52d37c4310986adbb8068",
        reviews: [],
    },
    {
        title: 'Victorian Home',
        description: 'Step back in time in this historic Victorian home.',
        image: {
            filename: 'victorian-home',
            url: 'https://www.bankrate.com/2022/09/01120255/Victorian-style-homes.jpg?auto=webp&optimize=high&crop=16:9&width=912',
        },
        price: 1900,
        category: 'Rooms',
        location: 'Savannah, Georgia',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-81.099834, 32.080898],
        },
        owner: "66f52d37c4310986adbb8069",
        reviews: [],
    },
    {
        title: 'City Apartment',
        description: 'A chic, modern apartment in the middle of downtown.',
        image: {
            filename: 'city-apartment',
            url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
        },
        price: 1800,
        category: 'Rooms',
        location: 'Seattle, Washington',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-122.3321, 47.6062],
        },
        owner: "66f52d37c4310986adbb805e",
        reviews: [],
    },
    {
        title: 'Modern Ski Lodge',
        description: 'Hit the slopes from this contemporary ski lodge.',
        image: {
            filename: 'modern-ski-lodge',
            url: 'https://locatiarchitects.com/wp-content/uploads/2019/03/Locati-Architects-Modern-Ski-Home-Ext-2.jpg',
        },
        price: 3200,
        category: 'National park',
        location: 'Breckenridge, Colorado',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-106.0423, 39.4817],
        },
        owner: "66f52d37c4310986adbb805f",
        reviews: [],
    },
    {
        title: 'Oceanfront Mansion',
        description: 'Live in luxury in this grand mansion with private beach access.',
        image: {
            filename: 'oceanfront-mansion',
            url: 'https://na.rdcpix.com/474541088/f64ab28ca65b2747c78d0370dc7adcaaw-c0rd-w832_h468_r4_q80.webp',
        },
        price: 5000,
        category: 'Amazing views',
        location: 'Malibu, California',
        country: 'USA',
        geometry: {
            type: 'Point',
            coordinates: [-118.7798, 34.0259],
        },
        owner: "66f52d37c4310986adbb805b",
        reviews: [],
    }
];

async function AddDATA() {
    await listings.deleteMany({});
    await listings.insertMany(sampleListings);
}

AddDATA();