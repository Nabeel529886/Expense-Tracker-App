import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    return(
        <div className="history">
            <h3>History</h3>
            <div className="history-underline"></div>
            <ul className="history-list">
                {transactions.map(transaction => (
                   <Transaction transaction={transaction} key={transaction.id} />
                ))}
                
            </ul>
        </div>
    )
}