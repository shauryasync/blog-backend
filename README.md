# 📚 Scroll & Scribble – Backend

Backend API for **Scroll & Scribble**, a full-stack blogging platform built using the MERN stack.

The backend provides secure authentication, blog management, and role-based authorization using JWT.

---

## 🚀 Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt
- Create Blog
- Read Blogs
- Update Own Blog
- Delete Own Blog
- Admin Authorization
- MongoDB Integration
- RESTful API

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- CORS
- dotenv

---

## 📂 Project Structure

```
blog-backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── package.json
└── server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file.

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 📦 Installation

Clone the repository

```bash
git clone YOUR_BACKEND_REPO_LINK
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Run production

```bash
npm start
```

---

## 📌 API Endpoints

### Authentication

POST `/api/users/register`

POST `/api/users/login`

### Blogs

GET `/api/blogs`

GET `/api/blogs/:id`

POST `/api/blogs`

PUT `/api/blogs/:id`

DELETE `/api/blogs/:id`

---

## 🌐 Deployment

Backend deployed on **Render**

---

## 👨‍💻 Author

Shaurya
