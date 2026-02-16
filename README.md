# Feedback Management System

A full-stack Feedback Management System built using React, Node.js, Express, and MySQL.

---

## 🚀 Features

- Submit feedback with rating
- View all submitted feedback (Admin View)
- Product listing page with:
  - Search by name
  - Filter by category
  - Sort by price (asc/desc)
- Tailwind CSS modern UI
- React Router navigation
- useMemo optimization for performance

---

## 🛠 Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS
- Axios
- React Router

Backend:
- Node.js
- Express.js
- MySQL
- dotenv
- cors

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/BhaveshWasnik/Feedback-management-system.git
cd Feedback-management-system

2️⃣ Setup Database

Open MySQL and run:
SOURCE database/feedback_db.sql;
OR
manually execute the SQL file.

3️⃣ Setup Backend:
cd backend
npm install

## Create a .env file inside backend folder:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=feedback_db

Run backend:

node server.js OR npm run dev

4️⃣ Setup Frontend
Open new terminal:
cd frontend
npm install
npm run dev
