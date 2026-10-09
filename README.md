# 📚 Cloud-Hosted Library Management System (Phase 1: Local Foundation)

## 📌 Project Overview
A modern, modular Library Management System built from scratch as a step-by-step practical pathway to mastering full-stack web development and Google Cloud Platform (GCP) cloud deployment. 

In **Phase 1**, we establish a clean local application foundation with a React single-page application (SPA) and a Node.js/Express REST API communicating seamlessly via Vite's development proxy.

---

## 🛠️ Technology Stack (Phase 1)
- **Frontend**: React (JavaScript), Vite, Vanilla CSS
- **Backend**: Node.js, Express.js (ES Modules)
- **Data Layer**: Temporary In-Memory Javascript objects (No DB yet)
- **Development Tooling**: Vite Proxy, Nodemon

---

## 📁 Folder Structure
```text
library-management/
├── frontend/             # Vite + React single-page application
│   ├── src/
│   │   ├── components/   # React UI components (Navbar, HealthStatus, BookList)
│   │   ├── App.jsx       # Root layout & page assembly
│   │   ├── index.css     # Design system & CSS styles
│   │   └── main.jsx      # React entrypoint
│   ├── index.html        # HTML template
│   ├── vite.config.js    # Vite configuration & dev proxy to backend (port 5000)
│   └── package.json      # Frontend dependencies & scripts
├── backend/              # Node.js + Express REST API server
│   ├── src/
│   │   ├── app.js        # Express app configuration & middleware
│   │   └── server.js     # Server entrypoint & port binding
│   └── package.json      # Backend dependencies & scripts
├── .gitignore            # Git exclusion rules
├── .env.example          # Sample environment variables
└── README.md             # Project documentation
```

---

## ⚙️ Prerequisites
- **Node.js**: v18.x or higher (Tested on v24.4.1)
- **npm**: v9.x or higher (Tested on v11.6.0)

---

## 🚀 Installation & Local Development Setup

### 1. Backend Setup
Open Terminal 1:
```bash
cd backend
npm install
npm run dev
```
*The backend server will start on `http://localhost:5000`.*

### 2. Frontend Setup
Open Terminal 2:
```bash
cd frontend
npm install
npm run dev
```
*The frontend development server will start on `http://localhost:3000` (or `http://localhost:5173`).*

---

## 📡 API Endpoints (Backend)

| Method | Endpoint | Description | Response Example |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status check | `{ "status": "OK", "timestamp": "..." }` |
| `GET` | `/api/books` | Fetch sample catalog | `{ "success": true, "data": [...] }` |

---

## 🔄 Development Request Flow vs. Production Deployment

### Development Flow (Current Phase):
1. User interacts with React app running at `http://localhost:3000`.
2. React components issue fetch requests to relative paths like `/api/health`.
3. **Vite Development Proxy** intercepts `/api/*` and transparently forwards requests to `http://localhost:5000/api/*`.
4. Express handles the request and sends JSON back through the proxy to React.
5. **Why use a proxy in dev?** Avoids CORS (Cross-Origin Resource Sharing) browser restrictions and matches production URL paths without hardcoding `http://localhost:5000` into client-side code.

### Future Production Flow:
1. React static assets built with `npm run build` served via Cloud Storage/CDN or NGINX.
2. Backend API containerized with Docker and deployed on **Google Cloud Run**.
3. Cloud DNS / Load Balancer routes `/api` traffic directly to Cloud Run and `/` to frontend assets.

---

## ⚠️ Current Limitations (Phase 1)
- **Data Persistence**: Data is stored temporarily in memory inside `app.js` and resets on server restart.
- **Authentication**: No user registration, login, or JWT session management yet.
- **Database**: MySQL and Cloud SQL are not yet attached.

---

## ☁️ Planned Future Cloud Architecture (Phases 2-6)
- **Database**: Cloud SQL (MySQL instance) with private IP connectivity
- **Image Storage**: Google Cloud Storage (GCS) buckets for book cover images
- **Containerization**: Docker containers built using multi-stage builds
- **Registry**: Google Artifact Registry (GAR)
- **Compute**: Google Cloud Run (Serverless microservices)
- **Security & IAM**: Google Secret Manager for DB credentials, IAM Service Accounts with least-privilege principles
