# 🏡 HomeFinder Server

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-5-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/MongoDB-7-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-8-880000?style=for-the-badge&logo=mongoose" />
</p>

<p align="center">
  <strong>RESTful Backend API for the HomeFinder Real Estate Platform</strong>
</p>

---

# 📖 About

The **HomeFinder Server** is a modern REST API built with **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**.

It powers the HomeFinder client application by handling property management, user authentication, favorites, reviews, and database operations.

---

# 🚀 Live API

> Add your deployed backend URL here.

Example:

```
https://your-server.vercel.app
```

---

# 💻 Client Repository

https://github.com/MDSOBUJMADBOR/HomeFilder

# ⚙️ Server Repository

https://github.com/MDSOBUJMADBOR/HomeFilder-Server

---

# ✨ Features

## Authentication

- Better Auth Integration
- Secure Login
- User Registration
- Protected Routes
- Session Authentication

---

## Property Management

- Add Property
- Get All Properties
- Get Property Details
- Update Property
- Delete Property
- Search Properties
- Filter Properties
- Sort Properties

---

## Favorites

- Add to Favorites
- Remove Favorite
- Get Favorite Properties

---

## Reviews

- Add Review
- Update Review
- Delete Review
- Get Property Reviews

---

## User Dashboard

- My Properties
- My Reviews
- Dashboard Analytics

---

## Database

- MongoDB Integration
- Mongoose Models
- CRUD Operations
- Optimized Queries

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Better Auth
- dotenv
- CORS

---

# 📦 Dependencies

```json
{
  "cors": "^2.8.5",
  "dotenv": "^17.2.1",
  "express": "^5.1.0",
  "jose-cjs": "^6.2.3",
  "mongodb": "^7.5.0",
  "mongoose": "^8.18.0"
}
```

---

# 📦 Dev Dependencies

```json
{
  "@types/cors": "^2.8.19",
  "@types/express": "^5.0.3",
  "@types/node": "^24.3.0",
  "ts-node-dev": "^2.0.0",
  "typescript": "^5.9.2"
}
```

---

# 📂 Folder Structure

```text
HomeFilder-Server
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── types
│   └── server.ts
│
├── dist
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

DATABASE_NAME=homefinder

BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:5000
```

---

# 📥 Installation

Clone the repository

```bash
git clone https://github.com/MDSOBUJMADBOR/HomeFilder-Server.git
```

Move into the project directory

```bash
cd HomeFilder-Server
```

Install dependencies

```bash
npm install
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

---

# 🏗 Build Project

```bash
npm run build
```

---

# ▶️ Start Production

```bash
npm start
```

---

# 📜 Available Scripts

```bash
npm run dev

npm run build

npm start

npm run vercel-build
```

---

# 🌐 API Overview

## Authentication

```
POST   /api/auth/login

POST   /api/auth/register

POST   /api/auth/logout
```

---

## Properties

```
GET    /api/properties

GET    /api/properties/:id

POST   /api/properties

PATCH  /api/properties/:id

DELETE /api/properties/:id
```

---

## Favorites

```
GET    /api/favorites

POST   /api/favorites

DELETE /api/favorites/:id
```

---

## Reviews

```
GET    /api/reviews

POST   /api/reviews

PATCH  /api/reviews/:id

DELETE /api/reviews/:id
```

---

# 🔒 Security

- Environment Variables
- Authentication Middleware
- Request Validation
- Error Handling
- CORS Configuration
- Secure Database Connection

---

# 🚀 Deployment

The backend is deployment-ready for:

- Vercel
- Render
- Railway
- VPS
- DigitalOcean

---

# 👨‍💻 Author

## MD Sobuj Madbor

**MERN Stack Developer**

### GitHub

https://github.com/MDSOBUJMADBOR

### LinkedIn

https://www.linkedin.com/in/md-sobuj-madbor/

### Portfolio

https://sobuj-madbor-portflio.vercel.app

### Email

sobujmadbor660@gmail.com

---

# ⭐ Support

If you like this project, please give this repository a ⭐ on GitHub.

---

<p align="center">
Made with ❤️ using Node.js, Express.js, TypeScript and MongoDB.
</p>
