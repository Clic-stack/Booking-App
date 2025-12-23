## 🏨 Booking App
A backend system built with Express, Sequelize, and PostgreSQL to manage hotel reservations. 
This project provides a complete API for handling users, cities, hotels, images, bookings, and reviews, ensuring a secure, scalable, and user-friendly architecture.

---

## 🌐 Deployment

## 🚀 Backend: Server online with Render
🔗 https://booking-app-b5o8.onrender.com

---

## 📄 BookingApp: Documentation online with Postman
🔗 https://documenter.getpostman.com/view/48309056/2sBXVZnDx7

---

## 🌐 GitHub Repository
🔗 https://github.com/Clic-stack/Booking-App
---

## 🎯 Project Goals
This project was designed to: 
- Implement CRUD endpoints for **Users, Cities, Hotels, Images, Bookings, and Reviews**.
- Provide authentication and authorization using JWT.
- Enable hotel filtering by city and name, with average ratings calculated from reviews.
- Support reservations linked to logged-in users and enforce update restrictions.
- Deliver professional documentation and reproducible workflows for collaborative development.

---

## 🧪 API Coverage
The following endpoints are implemented: 
### Users 

- `GET /users` – Retrieve all users (private) 
- `POST /users` – Create a new user (public)
- `DELETE /users/:id` – Delete a user by ID (private)
- `PUT /users/:id` – Update a user by ID (private)
- `POST /users/login` – User login (public)
  
### Cities

- `GET /cities` – Retrieve all cities (public)
- `POST /cities` – Create a new city (private)
- `DELETE /cities/:id` – Delete a city by ID (private)
- `PUT /cities/:id` – Update a city by ID (private)

### Hotels

- `GET /hotels` – Retrieve all hotels (public)
- Supports queries: `name`, `cityId` Example: `/hotels?name=Four%20Seasons&cityId=1`
- Includes field `average` with average rating from reviews.
- `GET /hotels/:id` – Retrieve hotel by ID (public)
- `POST /hotels` – Create a new hotel (private)
- `DELETE /hotels/:id` – Delete a hotel by ID (private)
- `PUT /hotels/:id` – Update a hotel by ID (private)

### Images 

- `GET /images` – Retrieve all images (private)
- `POST /images` – Upload a new image (private)
- `DELETE /images/:id` – Delete an image by ID (private)

### Bookings 

- `GET /bookings` – Retrieve bookings of logged-in user (private)
- `POST /bookings` – Create a booking (private, userId = logged-in user)
- `DELETE /bookings/:id` – Delete a booking (private)
- `PUT /bookings/:id` – Update booking dates (private, only `checkIn` and `checkOut`)

### Reviews 
- `GET /reviews` – Retrieve all reviews (public)
- Supports queries: `hotelId`, `offset`, `perPage` for pagination.
- Example: `/reviews?hotelId=1&offset=0&perPage=10`
- `POST /reviews` – Create a review (private, userId = logged-in user)
- `DELETE /reviews/:id` – Delete a review (private)
- `PUT /reviews/:id` – Update review rating/comment (private, userId and hotelId cannot be updated)

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "node --env-file=.env node_modules/jest/bin/jest.js"
}
```

---

## 💻 Tech Stack
| Backend Tools | Database       | Security & Middleware | Utilities   |
|---------------|----------------|-----------------------|-------------|
| Node.js       | PostgreSQL     | Helmet                | bcrypt      |
| Express       | Sequelize      | CORS                  | uuid        |
| Morgan        | pg/pg-hstore   | JWT                   | multer      |
| Cloudinary    |                |                       | streamifier |
---

## 🗂️ Project Structure

```bash
📁 BOOKING-APP
|   ├── 📁 node_modules/
|   ├── 📁 src/
│   |   └── 📁 config/
│   |   |    └── env.js
│   |   |    └── cloudinary.js
│   |   └── 📁 controllers/
│   |   |    └── booking.controller.js
│   |   |    └── city.controller.js
│   |   |    └── hotel.controller.js
│   |   |    └── image.controller.js
│   |   |    └── review.controller.js
│   |   |    └── user.controller.js
│   |   └── 📁 db/
│   |   |    └── connect.js
│   |   └── 📁 lib/
│   |   |    └── utils.js
│   |   └── 📁 middlewares/
│   |   |    └── auth.js
│   |   |    └── catchError.js
│   |   |    └── errorHandler.js
│   |   |    └── upload.js
│   |   └── 📁 models/
│   |   |    └── booking.model.js
│   |   |    └── city.model.js
│   |   |    └── hotel.model.js
│   |   |    └── Image.model.js
│   |   |    └── review.model.js
│   |   |    └── user.model.js
│   |   └── 📁 routes/
│   |   |    └── booking.route.js
│   |   |    └── city.route.js
│   |   |    └── hotel.route.js
│   |   |    └── image.route.js
│   |   |    └── index.js
│   |   |    └── review.route.js
│   |   |    └── user.route.js
│   |   └── app.js
│   |   └── server.js
|   ├── 📁 tests/
│   |   └── booking.test.js
│   |   └── city.test.js
│   |   └── hotel.test.js
│   |   └── review.test.js
│   |   └── setup.js
│   |   └── user.test.js
|   └── .env.example
|   └── .gitignore
|   └── jest.config.js
|   └── package-lock.json
|   └── package.json
```
---

## ⚙️ Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Clic-stack/BookingApp.git
   ```
2. Install dependencies:
   ```bash
   npm i
   ```
3. Configure enviroment variables:
- Changes file name `.env.example` to `.env`
- Modify variable values.
- Example configuration:
  
  ```bash
  PORT=3000
  DATABASE_URL=postgres://user:password@localhost:5432/your_database
  JWT_SECRET=your_secret_key
  CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
  ```
4. Run local server to verify correct configurations
   ```bash
    npm run dev
   ```
5. Run tests
   - Run all tests:
   ```bash
   npm test
   ```
   
   - Run individual test:
   ```bash
   npm test name_file.test.js
   ```
---

## 🎨 Author
Developed by Clio Salgado as part of the Node.js  & Backend module at Academlo, with the goal of consolidating skills in:
- API design and documentation
- Database modeling with Sequelize & PostgreSQL
- Authentication and authorization with JWT
- Professional backend workflows and reproducible environments

