// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import CustomerDetail from "./components/CustomerDetail";
import AddCustomerForm from "./components/AddCustomerForm";
import AddLoanForm from "./components/AddLoanForm";
import RepaymentForm from "./components/RepaymentForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard as Home */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Customer Detail and nested actions */}
        <Route
          path="/customer/:customerId"
          element={
            <PrivateRoute>
              <CustomerDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/:customerId/add-loan"
          element={
            <PrivateRoute>
              <AddLoanForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/:customerId/repayment"
          element={
            <PrivateRoute>
              <RepaymentForm />
            </PrivateRoute>
          }
        />

        {/* Add new customer */}
        <Route
          path="/add-customer"
          element={
            <PrivateRoute>
              <AddCustomerForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
