import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/store'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
 
const reduxStore = store();

reduxStore.subscribe(() => {
  const state = reduxStore.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

reduxStore.dispatch(addExpense({description: 'Water Bill', amount: '3000', createdAt: '2017'}))
reduxStore.dispatch(addExpense({description: 'Gas Bill', amount: '2000', createdAt: '2017'}))
reduxStore.dispatch(addExpense({description: 'Cable Bill', amount: '50000', createdAt: '2017'}))
// reduxStore.dispatch(setTextFilter('water'));

const jsx = (
  <Provider store={reduxStore}>
   <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
