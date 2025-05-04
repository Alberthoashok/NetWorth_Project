import React from "react";
import { useForm } from "react-hook-form";
import "./AddCustomerForm.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddCustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const newCustomer = {
      id: uuidv4(),
      name: data.name,
      balance: 0,
      nextDueDate: "",
      status: "Up-to-date",
    };
    customers.push(newCustomer);
    localStorage.setItem("customers", JSON.stringify(customers));
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="title">Add New Customer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="text"
          placeholder="Customer Name"
          {...register("name", { required: true })}
          className="input"
        />
        {errors.name && <span className="error">Name is required</span>}
        <button type="submit" className="button">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
