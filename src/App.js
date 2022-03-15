import React, { useState } from 'react'
import NewExpense from './components/newexpense/NewExpense'
import Expenses from './components/expenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const expDates = expenses.map(expense => expense.date.getFullYear().toString())
  const filterDates = expDates.filter((value, index, self) => self.indexOf(value) === index)
  filterDates.sort(function(a, b){return a-b}).reverse()
  
  const [filtYear, setFiltYear] = useState(filterDates[0])

  const filChange = (year) => {
      setFiltYear(year)
  }

  const addNewExpense = (expenseData) => {
    setExpenses((prevState)=> {return [expenseData, ...prevState]})
    setFiltYear(expenseData.date.getFullYear().toString())
  }
  
  return (
    <div>
      <NewExpense onNewExpense={addNewExpense} />
      <Expenses expenses={expenses} filtYear={filtYear} onFilChange={filChange} filterDates={filterDates} />
    </div>
  );
}

export default App;
