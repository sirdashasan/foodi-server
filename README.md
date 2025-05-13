# 🍽️ Restaurant Website – Backend

This is the **backend** of a full-featured restaurant website built using **Node.js**, **Express.js**, and **MongoDB**. It supports user authentication, product and order management, secure payments, and role-based access control.

---

## 🔧 Technologies Used

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **Firebase Admin SDK** 
- **JWT** 
- **Stripe API** 
- **Cloudinary** 
- **Express Validator**
- **Dotenv** 

---

## 🌟 Features

- 👥 **User Management** with roles: Admin & Customer
- 🔐 **Firebase Token Verification Middleware**
- 🛒 **Product & Category Management**
- 📷 **Image Upload via Cloudinary**
- 💳 **Stripe Payment Integration**
- 📦 **Order Creation & Management**
- 🔐 **JWT-based Session Management**
- 🔧 **Admin Panel APIs** for managing menu, orders, and users

## ⚙️ Setup Instructions

 ```bash
# 1. Clone the repository
git clone https://github.com/sirdashasan/foodi-server.git
cd foodi-server

# 2. Install dependencies
npm install

# 3. Create a .env file in the root and add the following variables:
DB_USER=your_database_username
DB_PASSWORD=your_database_password
ACCESS_TOKEN_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# 4. Start the development server
npm run dev
```



