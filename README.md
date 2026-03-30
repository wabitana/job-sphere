# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Job-Sphere 🌐

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-blue?logo=vite)](https://vitejs.dev/)

Job-Sphere is a modern **job search and application platform** built with React, TailwindCSS, and Vite. It allows users to search for jobs, save them, track applications, and manage their professional dashboard in a **secure and interactive UI**.

---

## 🚀 Features

- **Authentication**
  - Sign up and login with form validation
  - Protected routes for secure dashboard access
- **Dashboard**
  - Interactive, professional dashboard with stats
  - View recent applications, interviews, and saved jobs
  - Logout functionality
- **Job Management**
  - View detailed job listings
  - Save jobs for later reference
  - Track application status
- **Responsive Design**
  - Works seamlessly on desktop, tablet, and mobile
- **Animations**
  - Smooth UI animations with `framer-motion`
- **Social Sign-In (UI only)**
  - Google, Apple, Facebook, LinkedIn buttons included
- **Professional Styling**
  - Clean, modern, and intuitive UI using TailwindCSS
- **Expandable**
  - Ready to integrate with backend APIs for full-stack functionality

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Icons & UI:** React-Icons
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Backend (Optional):** Node.js, Express, MongoDB (API endpoints ready)

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/wabitana/job-sphere.git
cd job-sphere


Install dependencies
npm install
Run the project locally
npm run dev
Open your browser at:
http://localhost:5173
🔒 Authentication
JWT-based authentication (frontend-ready)
Protected routes for dashboard access
Stores token in localStorage after login
🎨 Screenshots


<img width="438" height="407" alt="image" src="https://github.com/user-attachments/assets/f73fafb7-11b3-4fcc-bb66-b05fccc3fa79" />

<img width="441" height="284" alt="image" src="https://github.com/user-attachments/assets/506aceed-da05-4ff2-af7f-555881abe0d8" />
<img width="438" height="282" alt="image" src="https://github.com/user-attachments/assets/632456ae-2367-4ebe-a1e0-96d16e4dd415" />

<img width="2133" height="1235" alt="image" src="https://github.com/user-attachments/assets/05d6923a-61ce-430d-99aa-06beee1a2256" />


📈 Future Enhancements
Full backend integration (Node.js + MongoDB)
Real-time notifications for job updates
Email verification and password reset
Social login functionality
Advanced filtering and search for jobs
Dark mode toggle
Admin panel for companies to post jobs
🤝 Contributing
Fork the repository
Create a branch (git checkout -b feature/awesome-feature)
Commit your changes (git commit -m "feat: awesome feature")
Push to the branch (git push origin feature/awesome-feature)
Open a Pull Request
📄 License

This project is licensed under the MIT License
.

🌟 Author

Wabitana
GitHub: https://github.com/wabitana
