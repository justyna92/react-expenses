import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formDisplayed, setFormDisplayed] = useState(false);

  const saveExpenseDataHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);

    setFormDisplayed(false);
  };

  const showFormHandler = () => {
    setFormDisplayed(true);
  };

  const hideFormHandler = () => {
    setFormDisplayed(false);
  };

  const showNewExpenseContent = () => {
    if (!formDisplayed) {
      return <button onClick={showFormHandler}>Add new expense</button>;
    }

    return (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={hideFormHandler}
      />
    );
  };

  return <div className="new-expense">{showNewExpenseContent()}</div>;
};

export default NewExpense;
