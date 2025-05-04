Project Overview
CrediKhata is a React.js-based loan ledger UI that allows users to register, log in, and manage customer loans entirely in the browser using localStorage. No backend is required. Administrators can add customers, record loans, and track repayments; customers and store owners have role-based access to their respective dashboards.

Tech Stack
React.js (v18+) – UI library for building interactive components

React Router (v6+) – Client-side routing

react-hook-form – Form handling and validation

uuid – Unique ID generation for customers, loans, and repayments

CSS Modules / Plain CSS – Scoped, modern styling with transitions

LocalStorage – Browser storage for persisting users, customers, loans, and repayments

Features
Authentication

Signup & login flows; credentials stored in localStorage

Protected routes via a PrivateRoute wrapper

Dashboard

List of customers displayed as responsive cards

Outstanding balance, next due date, and status (Up-to-date/Overdue)

“Add Customer” and per-card “Add Loan” buttons

Logout in top-right corner

Customer Detail

Loan history and repayment log per customer

Forms & Validation

Add Customer, Add Loan, Record Repayment forms

Client-side validation via react-hook-form

Data Persistence

All entities (users, customers, loans, repayments) persisted to localStorage

Installation & Setup
Clone the repo

bash
Copy code
git clone https://github.com/yourusername/credikhata.git
cd credikhata
Install dependencies

bash
Copy code
npm install react react-dom react-router-dom react-hook-form uuid
Run the app

bash
Copy code
npm start
Opens at http://localhost:3000.

Folder Structure
pgsql
Copy code
src/
├─ components/
│  ├─ AddCustomerForm.jsx
│  ├─ AddLoanForm.jsx
│  ├─ CustomerDetail.jsx
│  ├─ Dashboard.jsx
│  ├─ Login.jsx
│  ├─ PrivateRoute.jsx
│  ├─ RepaymentForm.jsx
│  └─ Signup.jsx
├─ styles/
│  ├─ AddCustomerForm.css
│  ├─ AddLoanForm.css
│  ├─ CustomerDetail.css
│  ├─ Dashboard.css
│  ├─ Login.css
│  └─ Signup.css
├─ App.jsx
└─ index.js
Usage
Sign up as a new user.

Log in; you’ll be taken to the Dashboard.

Add Customers → fill out the form → persists to localStorage.

View Customer Cards → add loans or view details.

Add Loans → updates customer balance and due date.

Record Repayments → reduces loan’s remaining balance.

Logout to clear authentication.

Contributing
Fork the repository

Create a new branch (git checkout -b feature/xyz)

Commit your changes (git commit -m "Add feature")

Push to your fork (git push origin feature/xyz)

Open a pull request
