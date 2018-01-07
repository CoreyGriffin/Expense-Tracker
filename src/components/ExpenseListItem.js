import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => (
  <div>
    <h4><Link to={`/edit/${props.id}`}>{props.description}</Link></h4>
    <p>{props.amount} - {props.createdAt}</p>
  </div>
)

export default ExpenseListItem;