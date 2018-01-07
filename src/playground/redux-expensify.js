import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description ='', note ='', amount = 0, createdAt = 0} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}

const removeExpense = ({id} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense 
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        //if is not equal == true wil be kept
        return id !== action.id
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default: 
      return state;
  }
};



const setTextFilter = ( text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}

const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  }
}

const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  }
}

const setStartDate = (startDate = undefined) => {
  return {
    type: 'SET_START_DATE',
    startDate
  }
}

const setEndDate = (endDate = undefined) => {
  return {
    type: 'SET_END_DATE',
    endDate
  }
}

const filtersReducerDefualtState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefualtState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    default: 
      return state;
  }
}

//Get Visible expenses - unix epoch
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //always result in true
      const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
      if(sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } 
      else if( sortBy === 'amount') {
        return b.amount < a.amount ? 1 : -1
      }
    });
  }


//rootReducer
const rootReducer = combineReducers({
  expenses: expensesReducer, 
  filters: filtersReducer
});

//create new store
const store = createStore(rootReducer)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
  // console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: '15000', createdAt: -211000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: '3000', createdAt: -1000}))
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: '500' }));
// store.dispatch(setTextFilter('ff'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));

// const demoState = {
//   expenses: [{
//     id: 'apofjpoas',
//     desc: 'January Rent',
//     note: 'The final payment for address',
//     amount: 54500, //sticking with pennies to reduce rounding and decimal errors
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// }