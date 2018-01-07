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

const jsx = (
  <Provider store={reduxStore}>
   <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
