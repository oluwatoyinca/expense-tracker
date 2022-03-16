// import App from '../App'
import React from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import Card from '../ui/Card'

const Expenses = (props) => {
    const dateFilter = (year) => {
        props.onFilChange(year)
    }

    const filteredExpenses = props.expenses.filter((expenser)=> {
        return expenser.date.getFullYear().toString() === props.filtYear
    })

    const delExp = (expId) => {
        props.onDeleteOfExp(expId)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={props.filtYear} onFilterChange={dateFilter} filterDates={props.filterDates} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} onDeleteExpe={delExp}/>
        </Card>
        );
}

export default Expenses;