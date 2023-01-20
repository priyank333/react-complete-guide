import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {


    //Single state update
    const [expenseTitle, setExpenseTitle] = useState('')
    const [expenseAmount, setExpenseAmount] = useState('')
    const [date, setDate] = useState('')


    //Multistate
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })
    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value)

        //React Schedule user input update. It does not perform immediately.
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        //
        // });

        //If you update state, and it depends on previous state, use this method.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {

        setExpenseAmount(event.target.value);
        //React Schedule user input update. It does not perform immediately.
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });

        //If you update state, and it depends on previous state, use this method.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {

        setDate(event.target.value)

        //React Schedule user input update. It does not perform immediately.
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });

        //If you update state, and it depends on previous state, use this method.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            'expenseTitle': expenseTitle,
            'amount': expenseAmount,
            'date': new Date(date),
            id: Math.random().toFixed(8)
        };
        props.onNewExpense(expenseData);

        //Two way binding, after submit make all inputs blank
        setExpenseTitle('')
        setExpenseAmount('')
        setDate('')
    }

    return (<form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={expenseTitle} onChange={titleChangeHandler} n/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={expenseAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>);
}

export default ExpenseForm;