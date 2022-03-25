import React, {useContext} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../ui/Card'
import './ExpenseItem.css'
import ExpenseItemContext from '../../context/expenseitem-context'

const ExpenseItem = (props) => {
    const expCtx = useContext(ExpenseItemContext)
    
    const deleteExpense = () => {
        expCtx.deleteExpense(props.id)
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    <button className='expense-item__del' onClick={deleteExpense}>Delete</button>
                </div>
            </Card>
        </li>
        );
}

export default ExpenseItem;