// src/components/AddLoanForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import "./AddLoanForm.css";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddLoanForm = () => {
  const { customerId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loans = JSON.parse(localStorage.getItem("loans")) || [];
    const customers = JSON.parse(localStorage.getItem("customers")) || [];

    const newLoan = {
      id: uuidv4(),
      customerId,
      item: data.item,
      amount: parseFloat(data.amount),
      dueDate: data.dueDate,
      remainingBalance: parseFloat(data.amount),
    };
    loans.push(newLoan);
    localStorage.setItem("loans", JSON.stringify(loans));

    const updatedCustomers = customers.map((c) => {
      if (c.id === customerId) {
        const balance = (c.balance || 0) + newLoan.amount;
        return {
          ...c,
          balance,
          nextDueDate: newLoan.dueDate,
        };
      }
      return c;
    });
    localStorage.setItem("customers", JSON.stringify(updatedCustomers));

    navigate(`/`);
  };

  return (
    <div className="container">
      <h2 className="title">Add New Loan</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="field">
          <label htmlFor="item" className="label">
            Item Sold
          </label>
          <input
            id="item"
            {...register("item", { required: true })}
            className="input"
            placeholder="e.g. Mobile Phone"
          />
          {errors.item && <span className="error">Item is required</span>}
        </div>

        <div className="field">
          <label htmlFor="amount" className="label">
            Loan Amount
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            {...register("amount", { required: true, min: 0.01 })}
            className="input"
            placeholder="e.g. 1500.00"
          />
          {errors.amount && (
            <span className="error">Valid amount is required</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="dueDate" className="label">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            {...register("dueDate", { required: true })}
            className="input"
          />
          {errors.dueDate && (
            <span className="error">Due date is required</span>
          )}
        </div>

        <button type="submit" className="button">
          Add Loan
        </button>
      </form>
    </div>
  );
};

export default AddLoanForm;
