import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterDate = (e) => {
        props.onFilterChange(e.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={filterDate} >
                    {props.filterDates.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;