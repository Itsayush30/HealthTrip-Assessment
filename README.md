# Backend Documentation for Weather Update Telegram Bot

## Overview

This document provides an overview of the backend implementation for the Weather Update Telegram Bot project. The backend is developed using Node.js, Express.js, MongoDB, and JWT authentication for the admin panel.

## Features

- **User Registration**: Users can register by providing their name, city, and country through the Telegram bot.
- **MongoDB Integration**: User data is stored in a MongoDB database to facilitate user management.
- **Weather Updates**: Registered users receive daily weather updates for their specified city and country.
- **Admin Panel**: An admin panel is available for managing API keys, message frequency, and user deletion.
- **JWT Authentication**: JWT authentication is implemented for securing the admin panel APIs.

## Project Structure


- **controllers/**: responsible for handling incoming requests from the client, processing data with services.
- **middlewares/**: Includes middleware functions, such as authentication middleware.
- **services/**: Contains the logic for handling different API endpoints and business logic.
- **models/**: Defines MongoDB schema and models.
- **routes/**: Contains route definitions for different API endpoints.
- **config/**: Configuration files, such as database configuration.
- **app.js**: Entry point of the backend application.
- **package.json**: Contains project dependencies and scripts.

## API Endpoints

### Admin Routes

- **POST /api/v1/weatherapikey**: Update weather API key.
- **POST /api/v1/botapikey**: Update Telegram bot API key.
- **POST /api/v1/msgfrequency**: Update 
- **DELETE /api/v1/user**: Delete a user.message frequency.

### Authentication

- **POST /api/v1/signin**: Sign in to the admin panel using JWT authentication.

## Setup and Installation

1. Clone the repository from GitHub.
2. Navigate to the backend directory.
3. Install dependencies using `npm install`.
4. Set up MongoDB and update the database configuration in `config/database.js`.
5. Run the backend server using `npm start`.

## Dependencies

- express
- mongoose
- telegraf
- jsonwebtoken
- bcryptjs
- dotenv
- nodemon (development)

## Usage

- Register users through the Telegram bot using the `/register` command.
- Access the admin panel APIs using JWT authentication.
- Manage API keys, message frequency, and user data through the admin panel.

## Contributing

Contributions to the project are welcome. Please submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
