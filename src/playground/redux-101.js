import { createStore } from 'redux';


//Action generators - returns action operators
const incrementCount = ({incrementBy = 1 }= {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  }
}

const decrementCount = ({decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  }
}

const resetCount = () => {
  return {
    type: 'RESET_COUNT'
  }
}

const setCount = ({count} = {}) => {
  return {
    type: 'SET_COUNT',
    setCount: count
  }
}

//REDUCERS
//1. Pure functions : output is only determined by input - Scoped function
//2. Never directly change state or action
const countReducer = (state = {count: 0}, action) => {  
  switch(action.type) {
    case 'INCREMENT':
     return {
      count: state.count + action.incrementBy
     };
     case 'DECREMENT':
     const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - action.decrementBy
      };
      case 'RESET_COUNT':
        return {
          count: 0
        };
        case 'SET_COUNT' :
        return {
          count: action.setCount
        }
     default: 
      return state;
  }  
}




//initiate store and setup defualt state inline as well as the action 
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState())
})


//Actions: An object that gets sent to the store
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));


