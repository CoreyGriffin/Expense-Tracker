import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
      <ul>
      {props.expenses.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseListItem 
            id={expense.id}
            description={expense.description}
            amount={expense.amount}
            createdAt={expense.createdAt}
            />
          </li>
        )
      })}
      </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: SelectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);
