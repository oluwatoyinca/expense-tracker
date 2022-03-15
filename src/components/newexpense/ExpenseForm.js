import React, { useState, useEffect } from 'react'
import './ExpenseForm.css'
// import $ from 'jquery'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        inpTitle: '',
        inpAmount: '',
        inpDate: ''
    })

    // useEffect(()=>{console.log(userInput)})

    const titleChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpTitle: e.target.value}})
    }

    const amountChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpAmount: e.target.value}})
    }

    const dateChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpDate: e.target.value}})
    }

    const formSubmit = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title: userInput.inpTitle,
            amount: userInput.inpAmount,
            date: new Date(userInput.inpDate)
        }

        props.onSaveNewExpense(expenseData)
        setUserInput({
            inpTitle: '',
            inpAmount: '',
            inpDate: ''
        })
    }

    return ( 
    <form onSubmit={formSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input id="me" type="text" value={userInput.inpTitle} onChange={titleChange} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.inpAmount} onChange={amountChange} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.inpDate} onChange={dateChange} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm