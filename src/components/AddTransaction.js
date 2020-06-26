import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const transactionTimeStamp = new Date()

    const {addIncome, addExpense} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()
        document.getElementById("text").value = ""
        document.getElementById("amount").value = 0
    }

    const income = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount,
        timeStamp: transactionTimeStamp.toLocaleString()
    }

    const expense = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: -amount,
        timeStamp: transactionTimeStamp.toLocaleString()
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label className="text" htmlFor="text">Text</label>
                <input id="text" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <label className="amount" htmlFor="amount">Amount (Income/Expense)</label>
                <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button className="income-btn" onClick={() => (
                  income.amount === 0?alert("Cannot add income of $0"):addIncome(income)  
                )}>Income</button>
                <button className="expense-btn" onClick={() => (
                  expense.amount === 0?alert("Cannot add expense of $0"):addExpense(expense)  
                )}>Expense</button>
            </form>
        </div>
    )
}