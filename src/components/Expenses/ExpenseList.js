import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    return props.expenses.map(expenseItem => {
        return (<ExpenseItem date={expenseItem.date} expenseTitle={expenseItem.expenseTitle}
                             expenseAmount={expenseItem.amount} key={Math.random().toString()}/>);
    });
}

export default ExpenseList;