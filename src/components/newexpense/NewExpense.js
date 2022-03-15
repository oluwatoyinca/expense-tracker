import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [expenseOpen, setExpenseOpen] = useState(false)

    const saveExpenseData = (inpExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...inpExpenseData
        }
        props.onNewExpense(expenseData)
        setExpenseOpen(false)
    }

    const cancelExpenseAdd = () => {
        setExpenseOpen(false)
    }

    const openExpenseForm = () => {
        setExpenseOpen(true)
    }

    let newExpenseContent = <button type='button' onClick={openExpenseForm}>Add Expense</button>

    if (expenseOpen) {
        newExpenseContent = <ExpenseForm onSaveNewExpense={saveExpenseData} onCancelExpenseAdd={cancelExpenseAdd}/>
    }

    return (
    <div className="new-expense">
        {newExpenseContent}
    </div>
    );
}

export default NewExpense