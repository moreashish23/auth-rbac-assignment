# Full Stack Authentication and Role-Based Access Control (RBAC) System

## Project Overview
This project is a full stack web application that demonstrates authentication and role-based access control (RBAC) using a Spring Boot backend and a React + TypeScript frontend.
Users can register with a specific role, login using their credentials, and access different content based on their assigned role.
The system uses JWT authentication for secure communication between the frontend and backend.


## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- MapStruct
- Lombok
- Maven
- Swagger / OpenAPI
- MySQL

### Frontend
- React
- TypeScript
- Vite
- React Router
- React Query
- Axios
- React Hook Form
- TailwindCSS

---

## Features

### Authentication
- User registration with role assignment (USER / ADMIN)
- Secure login using email and password
- JWT token generation after successful login

### Authorization (RBAC)
- Role-based access control
- USER can access user-level content
- ADMIN can access admin-level content and manage products

### Admin Features
- Create products
- Update products
- Delete products

### User Features
- View products

### Security
- JWT-based authentication
- Protected API endpoints
- Axios interceptor attaches JWT token automatically

---

## Backend Setup Instructions

1. Navigate to the backend folder
2. Configure the database in `application.properties`
Example:
spring.datasource.url=jdbc:mysql://localhost:3306/rbac_db
spring.datasource.username=root
spring.datasource.password=your_password
jwt.secret=your_secret

4. Run the backend
Backend will start on:
http://localhost:8274
Swagger documentation:
http://localhost:8274/swagger-ui/index.html

## Frontend Setup Instructions

1. Navigate to the frontend folder
cd rbac-product-frontend

2. Install dependencies
npm install

3. Create a `.env` file
Add the following variable:
VITE_API_BASE_URL=http://localhost:8274/api

4. Start the frontend
npm run dev
Frontend will start on:
http://localhost:5173
---
Login Page
<img width="1920" height="1080" alt="login" src="https://github.com/user-attachments/assets/5d74557d-d399-4ccc-88be-a03efe080c13" />

Register Page
<img width="1920" height="1080" alt="register" src="https://github.com/user-attachments/assets/7037496d-d5c1-44df-aa8a-31ea139bc326" />

Admin Dashboard
<img width="1920" height="1080" alt="AdminDashboard1" src="https://github.com/user-attachments/assets/5ef54471-4dca-425e-951c-5ca25f541e85" />

User Login
<img width="1920" height="1080" alt="User" src="https://github.com/user-attachments/assets/03a64c28-00ff-45d4-9610-23fb050a022a" />

Demo Video
https://drive.google.com/drive/folders/1f-ORu5873S0gtpjIU1NK_O5NPMrdHokS?usp=drive_link


