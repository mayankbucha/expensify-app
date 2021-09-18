import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Props is added because of the ConnectedExpenseList hoc
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }        
    </div>
);

// As the store changes, this will automatically re-run
// getting the fresh values for the component
const mapStateToProps = (state) => {
    // What informaticon from the store we need our component to access
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }
}

// Now the above ExpenseList function will have props with the object property name.
export default connect(mapStateToProps)(ExpenseList);