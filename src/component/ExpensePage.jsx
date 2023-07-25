import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpensePage = () => {
  const [expense, setExpense] = useState(0);
  const [description, setDescription] = useState("");
  const [expenseTransactions, setExpenseTransactions] = useState([]);
  const navigate = useNavigate();

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };
  const navigator = () => {
    navigate("/income");
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddExpense = () => {
    // Handle adding expense transaction here
    const newExpenseTransaction = {
      amount: expense,
      description: description,
    };

    setExpenseTransactions([...expenseTransactions, newExpenseTransaction]);

    // Clear the inputs after adding the transaction
    setExpense(0);
    setDescription("");
  };

  return (
    <div>
      <h2>Expense Page</h2>
      <div>
        <label>
          Expense Amount:
          <input type="number" value={expense} onChange={handleExpenseChange} />
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
      <button onClick={handleAddExpense}>Add Expense</button>

      <div>
        <h3>Expense Transactions:</h3>
        <ul>
          {expenseTransactions.map((transaction, index) => (
            <li key={index}>
              Amount: ${transaction.amount} - Description:{" "}
              {transaction.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={navigator}>Go to Income</button>
      </div>
    </div>
  );
};

export default ExpensePage;
