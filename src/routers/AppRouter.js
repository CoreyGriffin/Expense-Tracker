import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route default exact path="/" component={ExpenseDashboardPage}/>
      <Route exact path="/add" component={AddExpensePage}/>
      <Route exact path="/edit/:id" component={EditExpensePage}/>
      <Route exact path="/help" component={HelpPage}/>
      <Route component={NotFound}/> //will always be true if route not matched
    </Switch>
  </div>
</BrowserRouter>
)

export default AppRouter;