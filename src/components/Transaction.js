import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'


export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const currentDate = new Date()

    return (
        <div>
            <li className={transaction.amount > 0? "item-plus": "item-minus"}>
            {transaction.text}<small>{transaction.amount>0? "Income added on ": "Expense added on "}{currentDate.toLocaleString()}</small>
                <span>${transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>X</button>
            </li>

        </div>
    )
}