# 🎉 Freshers' Day 2026 Registration Portal

A full-stack event registration web application built for **Poornaprajna College Autonomous** to simplify the Freshers' Day registration process.

Students can register for multiple events through a modern, responsive interface, while organizers can securely access an admin dashboard to view all registrations event-wise.

---

## 🚀 Live Demo

🌐 Frontend: https://freshersday2026.vercel.app

🔗 Backend API: https://fresher-s-day-2026.onrender.com

---

## ✨ Features

### 👨‍🎓 Student Portal

- Register for Freshers' Day events
- Choose multiple events
- Escape Room unlocks after selecting any 2 events
- Escape Room participation is optional
- Prevents duplicate registrations using Roll Number
- Responsive design for mobile and desktop
- Loading state while registration is in progress
- Success & error toast notifications

### 🔐 Admin Panel

- Secure Admin Login
- Dashboard showing:
  - Total Registrations
  - Event-wise registrations
  - Student Name
  - Class
  - Section
  - Roll Number
- Event-wise tables for easier management

---

## 🛠 Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- React Hot Toast
- Vite

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📂 Project Structure

```
Freshers-Day-2026/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📋 Registration Rules

- Students can participate in multiple events.
- Escape Room becomes available only after selecting at least **2 events**.
- Students can choose whether or not to participate in Escape Room.
- Duplicate registrations are prevented using Roll Number.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/bhatSumukh/Fresher-s-Day-2026.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5500

MONGO_URI=your_mongodb_connection_string

ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```

---

## 📡 API Endpoints

### Student

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/students/register` | Register a student |
| GET | `/api/students` | Get all students |

### Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/admin/login` | Admin Login |


## 🚀 Future Improvements

- JWT Authentication
- Protected Admin Dashboard
- Search Students
- Filter by Class
- Export registrations as Excel
- Download PDFs
- Attendance Management
- Event-wise Analytics
- QR Code Check-in
- Email Confirmation

---

## 👨‍💻 Author

**Sumukh Bhat**

- GitHub: https://github.com/bhatSumukh
- LinkedIn: https://www.linkedin.com/in/bhatvsumukh
- Portfolio: https://sumukhbhat.vercel.app/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
