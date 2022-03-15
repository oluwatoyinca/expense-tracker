import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No Expense found</h2>
        )
    }

    const amountArr = props.expenses.map(expense => expense.amount)
    const sum = amountArr.reduce((a, b) => a + b, 0)

    return (
        <ul className='expenses-list'>
            <h3 className='expense-item__price'>Total:  ${sum}</h3>
            {props.expenses.map((expense) => {return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>})}
        </ul>
    )
}

export default ExpensesList