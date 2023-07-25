import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IncomePage = () => {
  const [income, setIncome] = useState(0);
  const [description, setDescription] = useState("");
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const navigate = useNavigate();
  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };
  const navigator = () => {
    navigate("/expense");
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddIncome = () => {
    // Handle adding expense transaction here
    const newIncomeTransaction = {
      amount: income,
      description: description,
    };

    setIncomeTransactions([...incomeTransactions, newIncomeTransaction]);

    // Clear the inputs after adding the transaction
    setIncome(0);
    setDescription("");
  };

  return (
    <div>
      <h2>Income Page</h2>
      <div>
        <label>
          Income Amount:
          <input type="number" value={income} onChange={handleIncomeChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
      </div>
      <button onClick={handleAddIncome}>Add Income</button>
      <div>
        <div>
          <h3>Expense Transactions:</h3>
          <ul>
            {incomeTransactions.map((transaction, index) => (
              <li key={index}>
                Amount: ${transaction.amount} - Description:{" "}
                {transaction.description}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={navigator}>Go to Expense</button>
      </div>
    </div>
  );
};

export default IncomePage;
