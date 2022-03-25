import React, { useContext } from 'react';

import './ExpensesFilter.css';
import ExpenseItemContext from '../../context/expenseitem-context';

const ExpensesFilter = (props) => {
    const expCtx = useContext(ExpenseItemContext)

    const filterDate = (e) => {
        expCtx.filChange(e.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={filterDate} >
                    {expCtx.filterDates.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;