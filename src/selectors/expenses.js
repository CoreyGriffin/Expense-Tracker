import moment from 'moment';

//Get Visible expenses - unix epoch

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true ;
      //always result in true
      const endDateMatch =  endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;
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

  export default getVisibleExpenses;