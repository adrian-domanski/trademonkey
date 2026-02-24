# 📈 Trademonkey

Trademonkey is a full-stack trading management platform built with
**React**, **ASP.NET Core**, and **SQL Server**.

The application allows users to track trades, manage portfolios, and
analyze trading performance through a modern web interface backed by a
secure REST API.

---

## 🚀 Tech Stack

### Frontend

- React
- Axios
- CSS / Tailwind

### Backend

- ASP.NET Core Web API
- Entity Framework Core
- RESTful API architecture

### Database

- Microsoft SQL Server

---

## 🏗 Architecture

- React (Frontend)
- ASP.NET Core Web API
- SQL Server Database

---

## ✨ Features

- Create, edit, and delete trades
- Portfolio tracking
- Trade performance monitoring
- RESTful API integration
- Simple UI
- Database persistence with Entity Framework

---

## 🛠 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/adrian-domanski/trademonkey.git cd
trademonkey

---

## 🔹 Backend Setup (.NET)

cd api dotnet restore

Update your `appsettings.json` connection string:

Apply migrations:

dotnet ef database update

Run the backend:

dotnet run

---

## 🔹 Frontend Setup (React)

cd frontend && npm install && npm run start

---

## 🌍 Deployment

- Frontend: Vercel
- Backend: Azure App Service
- Database: Azure SQL Database

---

## 🔐 Environment Variables

Backend:
- ConnectionStrings\_\_DefaultConnection=your_production_connection_string 
- FMPKey=(get from https://site.financialmodelingprep.com/) 
- "JWT": { 
"Issuer": "" 
"Audience": "" 
"SigningKey": ""
}

Frontend:
- REACT_APP_API_KEY= same as FMPKey (get from https://site.financialmodelingprep.com/) 
- REACT_APP_API_URL= backend api url 

---

## 📚 Example API Endpoints

GET /api/portfolio\  
DELETE /api/portfolio/{id} 
 
---

## 🚀 Demo

https://monkey.kodario.com/
