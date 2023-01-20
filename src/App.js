import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    const DUMMY_EXPENSES = [
        {
            expenseTitle: "Hardware-Charges",
            amount: 45.00,
            date: new Date(2022, 2, 8)
        }, {
            expenseTitle: "Employee Snakes",
            amount: 450.00,
            date: new Date(2022, 8, 25)
        }, {
            expenseTitle: "Video-Streaming-Charges",
            amount: 1233.00,
            date: new Date(2020, 2, 8)
        }, {
            expenseTitle: "Web-Domain-Charges",
            amount: 45.00,
            date: new Date(2019, 2, 8)
        }
    ];

    const [expenses, setExpense] = useState(DUMMY_EXPENSES);
    const onAddHandler = (newExpense) => {
        setExpense(prevExpenses => {
            return [newExpense, ...prevExpenses];
        });
    }

    return (
        <div>
            <NewExpense onAdd={onAddHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
