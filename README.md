# Airbnb Clone

A full-stack Airbnb clone built using Node.js, Express.js, MongoDB, and other modern web technologies. This project implements CRUD operations for listings, user authentication, file uploads, form validations, and integrates third-party services such as Cloudinary and Mapbox.

## Live Demo

Check out the live demo of the project here:  
👉 **[Wanderlust - Airbnb Clone](https://wanderlust-mmuj.onrender.com/listings)**

## Features

- **CRUD Operations**: Create, read, update, and delete listings.
- **Authentication**: User signup, login, and logout using Passport.js.
- **Image Uploads**: File uploads for listing images using Multer and Cloudinary.
- **Map Integration**: Display listing locations using Mapbox.
- **Data Validation**: Server-side form validation using Joi.
- **Session Handling**: Persistent login sessions with express-session.
- **Templating**: Dynamic views rendered using EJS.
- **Flash Messages**: Feedback and error handling with connect-flash.
  
## Technologies Used

- **Backend**: Node.js, Express.js (MVC format)
- **Templating**: EJS
- **Database**: MongoDB Atlas, Mongoose ODM
- **Image Hosting**: Cloudinary
- **Map Integration**: Mapbox
- **Authentication**: Passport.js (local strategy)
- **File Handling**: Multer (for form file inputs)
- **Form Validation**: Joi
- **Session Management**: Express Sessions
- **Flash Messages**: connect-flash
- **Frontend**: HTML5, CSS3, Bootstrap

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary Account](https://cloudinary.com/)
- [Mapbox Account](https://www.mapbox.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/airbnb-clone.git
   cd airbnb-clone
   
2. Install the dependencies:

   ```bash
   npm install

3. Set up your environment variables:

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    
    MAPBOX_TOKEN=your_mapbox_token
    
    MONGODB_URI=your_mongodb_uri
    SESSION_SECRET=your_session_secret

4. Start the development server:
     ```bash
     npm start


### Descriptions:

- **config/**: Contains the configuration for various services like MongoDB and Passport.js.
- **controller/**: Includes the logic to handle the incoming requests and interact with the models.
- **images/**: Contains image files if stored locally (optional if you're using Cloudinary for image hosting).
- **middlewares/**: Middleware files for session handling, user authentication, error handling, etc.
- **models/**: Mongoose models, representing the structure of data stored in MongoDB.
- **node_modules/**: This directory contains all the npm packages installed for the project.
- **private/**: Private files that are not to be exposed to the public.
- **public/**: This directory contains static files like CSS, client-side JavaScript, and images.
- **routes/**: Defines routes to handle user requests, interact with controllers, and return responses.
- **test/**: Holds all testing-related files (unit, integration, or functional tests).
- **utils/**: Utility scripts or helper functions that are reused in different parts of the project.
- **views/**: Stores the EJS view templates that are rendered on the server.
- **.env**: Stores environment variables (database connection, API keys, etc.).
- **main.js**: The main entry point for starting the application. It sets up Express, connects to MongoDB, and defines the routes and middlewares.
- **package.json**: Lists the project’s dependencies, scripts, and other metadata.
- **README.md**: Provides documentation and instructions for the project.

This structure follows the MVC (Model-View-Controller) pattern to separate the logic of the application, making it easier to maintain and scale.
