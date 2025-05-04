// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(stored);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/login");
  };

  const getStatus = (dueDate) => {
    return new Date(dueDate) < new Date() ? "Overdue" : "Up-to-date";
  };

  return (
    <div className="container">
      <h2 className="title">Customer Dashboard</h2>
      <header className="header">
        <div className="header-buttons">
          <button
            className="add-customer-btn"
            onClick={() => navigate("/add-customer")}>
            + Add Customer
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="cards">
        {customers.map((c) => (
          <div
            key={c.id}
            className={`card ${
              getStatus(c.nextDueDate) === "Overdue" ? "overdue" : ""
            }`}>
            <h3 className="card-name">
              <Link to={`/customer/${c.id}`} className="link">
                {c.name}
              </Link>
            </h3>
            <p className="card-field">
              <span className="field-label">Balance:</span> ${c.balance}
            </p>
            <p className="card-field">
              <span className="field-label">Next Due:</span>{" "}
              {c.nextDueDate || "—"}
            </p>
            <p className="card-field">
              <span className="field-label">Status:</span>{" "}
              {getStatus(c.nextDueDate)}
            </p>
            <button
              className="add-loan-btn"
              onClick={() => navigate(`/customer/${c.id}/add-loan`)}>
              + Add Loan
            </button>
          </div>
        ))}
        {customers.length === 0 && (
          <p className="no-customers">
            No customers yet. Use “Add Customer” above.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
