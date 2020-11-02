import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setText('')
        setAmount('')
    } 

    return (
        <>
            <h3>Añade una nueva transaccion</h3>   
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Ingresa un concepto...'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Monto</label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Ingresa un monto...'/>
                </div>
                <button className='btn'>Añade una transaccion</button>
            </form>

        </>
    )
}
