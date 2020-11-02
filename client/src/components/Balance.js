import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => parseInt(transaction.amount));
    const total = amounts.reduce((acc, item) =>(acc += item), 0).toFixed(2);
    console.log(amounts)
    console.log(total)

    return (
        <>
            <h4>Tu saldo</h4>   
            <h1>${total}</h1>
            <br/>
        </>
    )
}
