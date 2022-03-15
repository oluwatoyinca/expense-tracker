import React, { useState} from 'react'
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
            amount: +userInput.inpAmount,
            date: new Date(userInput.inpDate)
        }

        const ifNull = Object.values(expenseData).filter(val => {
            if(Object.prototype.toString.call(val) === '[object Date]') {
                return isNaN(val)
            }
            else {
                return !val
            }
        })

        if(ifNull.length === 0) {
            props.onSaveNewExpense(expenseData)
            setUserInput({
                inpTitle: '',
                inpAmount: '',
                inpDate: ''
            })
        }
    }

    const cancelForm = () => {
        props.onCancelExpenseAdd()
        setUserInput({
            inpTitle: '',
            inpAmount: '',
            inpDate: ''
        })
    }

    const today = new Date()
    const offset = today.getTimezoneOffset()
    const useDate = new Date(today.getTime() - (offset*60*1000)).toISOString().split('T')[0]

    return ( 
    <form onSubmit={formSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input id="me" type="text" value={userInput.inpTitle} onChange={titleChange} required/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.inpAmount} onChange={amountChange} required/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max={useDate} value={userInput.inpDate} onChange={dateChange} required/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={cancelForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
}

export default ExpenseForm