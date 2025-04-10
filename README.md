# User Authentication App

This is a simple user authentication system built with Node.js, Express, MongoDB, Mongoose, EJS templating, and Bootstrap styling. It allows users to register, log in, view a dashboard, and delete their account.

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Frontend:** EJS, HTML, CSS, Bootstrap
- **Session Management:** express-session
- **Password Security:** bcryptjs

---

## 🚀 Features

- Register new user account
- Log in with username and password
- Session-based authentication
- Protected dashboard route
- Delete user account
- Responsive UI using Bootstrap

---

## 📁 Project Structure
. ├── models/ │ └── User.js ├── public/ │ └── style.css ├── views/ │ ├── login.ejs │ ├── register.ejs │ └── dashboard.ejs ├── middleware/ │ └── auth.js (optional) ├── server.js └── README.md


---

## 🛠️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/jeswanth099/task.git
cd auth-app


Install dependencies
npm install
npm init -y
npm install express mongoose ejs bcryptjs express-session

Start MongoDB
Ensure you have MongoDB installed and running locally. You can start it using:
mongod

Run the app
node server.js
Visit: http://localhost:3000

🔐 Notes:-
-Passwords are hashed using bcrypt for security
-Sessions are stored in memory (you can swap to MongoStore for production)
-No email verification — add it if needed!





