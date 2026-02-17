# 🎵 Music App Backend API

A scalable **Music Streaming Backend** built using **Node.js, Express, MongoDB, JWT Authentication, and ImageKit.io**.
This API provides secure user authentication, role-based artist permissions, music uploads, album creation, and media management.

---

## 🚀 Features

✅ User Registration & Login (JWT Authentication)
✅ Role-Based Access (Only Artists Can Upload Music)
✅ Upload Music using ImageKit Cloud Storage
✅ Create and Manage Albums
✅ Fetch All Music Tracks
✅ Fetch All Albums
✅ Secure Logout System
✅ RESTful API Architecture

---

## 🛠️ Tech Stack

* **Backend Framework:** Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT (JSON Web Token)
* **File Storage:** ImageKit.io
* **Runtime:** Node.js

---

## 📂 Project Structure (Example)

```
src/
 ┣ controllers/
 ┣ models/
 ┣ routes/
 ┣ middleware/
 ┣ config/
 ┗ server.js
```

---

## 🔐 Authentication Flow

* Users register and login using JWT authentication.
* Tokens are required to access protected routes.
* Artist role is required to upload music or create albums.

---

## 📡 API Endpoints

### 👤 Auth Routes

```
POST   /api/auth/register   -> Register user
POST   /api/auth/login      -> Login user
POST   /api/auth/logout     -> Logout user
```

### 🎶 Music Routes

```
POST   /api/music/upload    -> Upload music (Artist only)
GET    /api/music           -> Get all music
```

### 💿 Album Routes

```
POST   /api/music/album    -> Create album
GET    /api/albums          -> Get all albums
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


IMAGEKIT_PRIVATE_KEY=your_private_key

```

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/music-backend.git
cd music-backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Server

```
npm run dev
```

Server will start on:

```
http://localhost:2000
```

---

## 🧪 Testing

You can test endpoints using:

* Postman
* Thunder Client
* Insomnia

Make sure to include JWT token in headers for protected routes:

```
Authorization: Bearer <token>
```

---

## ☁️ Image Upload

Music files are uploaded to **ImageKit.io** cloud storage for optimized delivery and media management.

---

## 🔮 Future Improvements

* Streaming support
* Playlist system
* Like/Follow feature
* Admin dashboard
* Rate limiting & advanced security

---

## 👨‍💻 Author

**Swarnavo Ray**
MERN Stack Enthusiast

---

## 📜 License

This project is licensed under the MIT License.
