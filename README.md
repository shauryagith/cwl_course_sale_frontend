# CWL Course Sale – Frontend 🎓

A modern, responsive **Course Subscription Frontend** built with **React + Vite + TypeScript**, styled using **shadcn/ui & Tailwind CSS**, and deployed on **Vercel**.  
It consumes a secure REST API hosted on Render with JWT-based authentication.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel):**  
(https://cwl-course-sale-frontend-odxb.vercel.app/)

🔗 **Backend API (Render):**  
https://cwlcoursebackend.onrender.com

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 18
- ⚡ Vite
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🧩 shadcn/ui (Radix UI)
- 🔁 React Router DOM
- 📡 Axios
- 🧠 TanStack React Query

### Backend (Consumed API)
- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- Hosted on Render

---

## ✨ Features

- 🔐 User Authentication (JWT)
- 📚 Browse available courses
- 🆓 Subscribe to free courses
- 💳 Subscribe to paid courses (promo-based mock flow)
- 🧾 My Courses dashboard
- 🔄 Persistent login using local storage
- ⚡ Fast build & optimized performance
- 📱 Fully responsive UI

---

## 📂 Project Structure

frontend/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ │ └── api.ts
│ ├── utils/
│ ├── hooks/
│ ├── App.tsx
│ └── main.tsx
├── .gitignore
├── .npmrc
├── pnpm-lock.yaml
├── package.json
├── vite.config.ts
└── tailwind.config.ts

yaml
Copy code

---

## 🔗 API Integration

All API calls are handled using Axios.

```ts
const api = axios.create({
  baseURL: "https://cwlcoursebackend.onrender.com/api",
});
JWT token is automatically attached via Axios interceptors.

⚙️ Local Development Setup
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/shauryagith/cwl_course_sale_frontend.git
cd cwl_course_sale_frontend
2️⃣ Install dependencies (pnpm recommended)
bash
Copy code
pnpm install
3️⃣ Run development server
bash
Copy code
pnpm dev
App will run at:

arduino
Copy code
http://localhost:5173
🏗️ Build for Production
bash
Copy code
pnpm build
Build output will be generated in the dist/ folder.

☁️ Deployment
Frontend
Platform: Vercel

Build Command: pnpm build

Output Directory: dist

Node Version: 20.x

Backend
Platform: Render

Base URL: https://cwlcoursebackend.onrender.com

🔒 Authentication Flow
User logs in / signs up

Backend returns JWT

Token stored in browser storage

Axios interceptor attaches token to protected routes

Backend validates token for each request

🧪 Testing Checklist
 Login & Signup

 Protected routes

 Course listing API

 Subscription flow

 Page refresh handling

 Production build success

📸 Screenshots
Add screenshots of Home, Login, Course Details, and My Courses pages here.

📄 Resume / Interview Description
Developed and deployed a full-stack course subscription platform with a React (Vite + TypeScript) frontend hosted on Vercel and a Node.js + Express backend hosted on Render, integrated with MongoDB Atlas and JWT-based authentication.

🤝 Contributing
Contributions are welcome!
Feel free to fork the repository and submit a pull request.

📜 License
This project is licensed under the MIT License.

👤 Author
Shreyash Shaurya Srivastav

GitHub: https://github.com/shauryagith

LinkedIn: (add your LinkedIn URL)

⭐ If you like this project, don’t forget to give it a star!

yaml
Copy code

---

## ✅ What You Should Do Now

1️⃣ Paste this into `README.md`  
2️⃣ Update:
- Vercel live URL
- Add screenshots (optional)
3️⃣ Commit & push:
```bash
git add README.md
git commit -m "Add complete frontend README"
git push

