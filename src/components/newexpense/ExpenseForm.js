import React, { useState} from 'react'
import './ExpenseForm.css'
// import $ from 'jquery'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        inpTitle: '',
        inpAmount: '',
        inpDate: ''
    })
    const [isValid, setIsValid] = useState({
        title: true,
        amount: true,
        date: true
    })

    // useEffect(()=>{console.log(userInput)})

    const titleChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpTitle: e.target.value}})
        setIsValid((prevState) => {return {...prevState, title: true}})
    }

    const amountChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpAmount: e.target.value}})
        setIsValid((prevState) => {return {...prevState, amount: true}})
    }

    const dateChange = (e) => {
        setUserInput((prevState) => {return {...prevState, inpDate: e.target.value}})
        setIsValid((prevState) => {return {...prevState, date: true}})
    }

    const formSubmit = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title: userInput.inpTitle.trim(),
            amount: +userInput.inpAmount.trim(),
            date: new Date(userInput.inpDate.trim())
        }

        const ifNull = Object.entries(expenseData).filter(ent => {
            if(Object.prototype.toString.call(ent[1]) === '[object Date]') {
                return isNaN(ent[1])
            }
            else {
                return !ent[1]
            }
        })

        if(ifNull.length > 0) {
            ifNull.map(data => {
                const mKey = data[0]
                return setIsValid((prevState) => {return {...prevState, [mKey]: false}})
            })
        }
        else if(expenseData.amount < 0) {
            setIsValid((prevState) => {return {...prevState, amount: false}})
        }
        else {
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
                <label style={{color: !isValid.title ? 'red' : 'black'}}>Title</label>
                <input id="me" type="text" value={userInput.inpTitle} onChange={titleChange} required/>
            </div>
            <div className="new-expense__control">
                <label style={{color: !isValid.amount ? 'red' : 'black'}}>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.inpAmount} onChange={amountChange} required/>
            </div>
            <div className="new-expense__control">
                <label style={{color: !isValid.date ? 'red' : 'black'}}>Date</label>
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