import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    // default state
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        }
    }

    onDescriptionChange = (e) => {
        // cannot directly provide the value into the callback
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        // specific decimal format of a number,
        // upto 2 digits after decimal place
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChanged = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChanged = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide desc and amt'
            this.setState(() => ({error: 'Please provide desc and amount'}))
        }
        else {
            // clear the error
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} />
                    <input type="number" placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChanged}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}