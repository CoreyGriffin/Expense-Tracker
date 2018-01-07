import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
  //rootReducer
  const rootReducer = combineReducers({
    expenses: expensesReducer, 
    filters: filtersReducer
  });

  //create new store
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
}


