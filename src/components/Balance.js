import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)

    const total = amount.reduce((acc, item) => (acc+=item), 0).toFixed(2)
    return (
        <div className="balance">
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance