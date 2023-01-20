import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const newExpenseHandler = (newExpense) => {
        props.onAdd(newExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onNewExpense={newExpenseHandler}/>
        </div>
    );
}

export default NewExpense;