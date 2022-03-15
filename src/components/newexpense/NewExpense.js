import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseData = (inpExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...inpExpenseData
        }
        props.onNewExpense(expenseData)
    }

    return (
    <div className="new-expense">
        <ExpenseForm onSaveNewExpense={saveExpenseData} />
    </div>
    );
}

export default NewExpense