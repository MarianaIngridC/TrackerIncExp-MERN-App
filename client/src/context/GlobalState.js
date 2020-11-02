import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// import axios from 'axios'
import axios from '../config/axios';


// initial state
const initialState = {
    transactions:[],
    error: null,
    loading: true
}

// create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // actions
    async function getTransactions(){
        try{
            const res = await axios.get('/transaction')
            console.log(res)
            dispatch({
                type: 'GET_ALL_TRANSACTION',
                payload: res.data.data
            })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
                // .response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try{
            await axios.delete(`http://localhost:2000/api/transaction/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
                })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
        
    }
    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post(`http://localhost:2000/api/transaction`, transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
                })
        }catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err
                // .res.data.error
            })
        }
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}