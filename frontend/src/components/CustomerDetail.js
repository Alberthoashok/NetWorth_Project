import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CustomerDetail.css";
const CustomerDetail = () => {
  const { id } = useParams();
  const [loans, setLoans] = useState([]);
  const [repayments, setRepayments] = useState([]);

  useEffect(() => {
    const storedLoans = JSON.parse(localStorage.getItem("loans")) || [];
    const customerLoans = storedLoans.filter((loan) => loan.customerId === id);
    setLoans(customerLoans);

    const storedRepayments =
      JSON.parse(localStorage.getItem("repayments")) || [];
    setRepayments(storedRepayments);
  }, [id]);

  const getRepaymentsForLoan = (loanId) => {
    return repayments.filter((repayment) => repayment.loanId === loanId);
  };

  return (
    <div className="container">
      <h2 className="title">Customer Transactions</h2>
      {loans.map((loan) => (
        <div key={loan.id} className="loanCard">
          <h3>{loan.item}</h3>
          <p>Loan Amount: {loan.amount}</p>
          <p>Due Date: {loan.dueDate}</p>
          <p>Remaining Balance: {loan.remainingBalance}</p>
          <h4>Repayment History:</h4>
          <ul>
            {getRepaymentsForLoan(loan.id).map((repayment) => (
              <li key={repayment.id}>
                Amount: {repayment.amount}, Date: {repayment.date}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomerDetail;
