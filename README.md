# 📚 Library Management System

A simple and powerful web-based Library System built with Vue.js, Node.js, Express, and MongoDB. It allows users to manage books, authors, and borrowing records with secure authentication.

---

## 🚀 Features

- ✅ Add, view, edit, and delete books
- ✅ User authentication (login/logout with JWT token)
- ✅ Role-based access control (admin and users)
- ✅ Responsive and modern user interface (TailwindCSS)
- ✅ RESTful API using Node.js and Express
- ✅ Secure token handling with Axios

---

## 🧰 Tech Stack

| Frontend        | Backend         | Database     |
|----------------|-----------------|--------------|
| Vue 3 + Vite    | Node.js + Express | MongoDB Atlas / Local |

---

## 📦 Installation

### 1. Clone the project

```bash
git clone https://github.com/your-username/library-system.git
cd library-system
2. Install frontend dependencies
bash
Copy
Edit
cd frontend
npm install
3. Install backend dependencies
bash
Copy
Edit
cd ../backend
npm install
⚙️ Configuration
Create .env file in backend/ folder:
env
Copy
Edit
PORT=3000
MONGODB_URI=mongodb://localhost:27017/library
JWT_SECRET=your_jwt_secret_key
🏃‍♂️ Running the App
Start Backend API
bash
Copy
Edit
cd backend
npm run dev
Start Frontend App
bash
Copy
Edit
cd frontend
npm run dev
Frontend: http://localhost:5173
Backend API: http://localhost:3000

🔐 Authentication
Login API returns a token.

Token is stored in localStorage.

Each protected request must send Authorization: Bearer <token> in the header.

📁 Folder Structure
perl
Copy
Edit
library-system/
│
├── frontend/       # Vue.js app
│   ├── src/
│   └── ...
│
├── backend/        # Express.js API
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── ...
🧪 Example API Endpoints
Method	Endpoint	Description
POST	/api/login	User login
GET	/api/books	Get all books
POST	/api/books	Add new book (auth)
PUT	/api/books/:id	Update book (auth)
DELETE	/api/books/:id	Delete book (auth)

