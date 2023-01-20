import './Expenses.css';
import Card from "../../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {

    const [year, setYear] = useState('2019')

    const onChangeSelectedYear = (year) => {
        setYear(year);
    }

    const filteredExpenses = props.expenses.filter(({date}) => {
        return date.getFullYear() == year;
    });
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={year} onChangeSelectedYear={onChangeSelectedYear}/>
            <ExpenseList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;
