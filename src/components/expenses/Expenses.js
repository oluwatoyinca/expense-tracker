// import App from '../App'
import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
        );
}

export default Expenses;