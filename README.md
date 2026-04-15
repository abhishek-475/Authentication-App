==================================================================
                    AUTHENTICATION APP
==================================================================

A complete login, signup, and profile management system built with 
MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

==================================================================
                      HOW TO SETUP
==================================================================

STEP 1: BACKEND
------------------------------------------------
cd backend
npm install

Create a file named .env in backend folder and add:
------------------------------------------------
PORT=5000
MONGODB_URI=***
JWT_SECRET=***

Start backend server:
------------------------------------------------
npm start
(Server runs on http://localhost:5000)

STEP 2: FRONTEND
------------------------------------------------
cd frontend
npm install
npm run dev
(App runs on http://localhost:5173)

==================================================================
                      WHAT IT DOES
==================================================================

1. SIGNUP PAGE
   - Create new account with name, email, password
   - Click eye icon to see password while typing
   - Press Enter to submit

2. LOGIN PAGE  
   - Login with email and password
   - Password visibility toggle
   - Redirects to dashboard after success

3. DASHBOARD PAGE
   - View your profile (name, email, avatar)
   - Edit profile button to update information
   - Change password (requires current password)
   - Logout button

==================================================================
                    API ENDPOINTS
==================================================================

POST   /api/auth/signup   - Register new user
POST   /api/auth/login    - Login user
GET    /api/auth/me       - Get logged-in user data
PUT    /api/auth/update   - Update user profile

==================================================================
                    PROJECT FOLDER STRUCTURE
==================================================================

backend/
  ├── controllers/userController.js  (API logic)
  ├── models/User.js                 (Database schema)
  ├── routes/userRoutes.js           (API routes)
  ├── connection/db.js               (MongoDB connection)
  └── server.js                      (Main server file)

frontend/
  ├── src/
  │   ├── components/
  │   │   ├── Login.jsx              (Login page)
  │   │   ├── Signup.jsx             (Signup page)
  │   │   └── Dashboard.jsx          (Profile page)
  │   └── services/authService.js    (API calls)
  └── package.json

==================================================================
                    TROUBLESHOOTING
==================================================================

Problem: Cannot connect to backend
Solution: Make sure backend is running on port 5000

Problem: MongoDB connection error  
Solution: Install MongoDB or use MongoDB Atlas cloud database

Problem: 404 error on signup/login
Solution: Check if API_URL in frontend matches backend endpoint

==================================================================
                    TECHNOLOGIES USED
==================================================================

Frontend:
  - React.js (UI library)
  - Tailwind CSS (Styling)
  - React Router (Page navigation)
  - Axios (API calls)
  - React Hot Toast (Notifications)

Backend:
  - Node.js (JavaScript runtime)
  - Express.js (Web framework)
  - MongoDB (Database)
  - JWT (Authentication tokens)
  - Bcryptjs (Password encryption)

==================================================================
                      CONTACT
==================================================================

For any issues, check the console logs in both frontend and backend.
Make sure all dependencies are installed correctly.

==================================================================
