// import App from '../App'
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import Card from '../ui/Card'

const Expenses = (props) => {
    const filteredExpenses = props.expenses.filter((expenser)=> {
        return expenser.date.getFullYear().toString() === props.filtYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={props.filtYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
        );
}

export default Expenses;