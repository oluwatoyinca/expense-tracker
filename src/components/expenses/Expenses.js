// import App from '../App'
import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../ui/Card'

const Expenses = (props) => {
    const [filYear, setFilYear] = useState('2020')

    const dateFilter = (year) => {
        setFilYear(year)
    }

    const filteredExpenses = props.expenses.filter((expenser)=> {
        return expenser.date.getFullYear().toString() === filYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filYear} onFilterChange={dateFilter} />
            {filteredExpenses.length === 0 ? (<p>No expenses found</p>) : (filteredExpenses.map((expense) => {
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
            }))}
        </Card>
        );
}

export default Expenses;