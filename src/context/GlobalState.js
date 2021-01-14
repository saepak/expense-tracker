import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: 'Salary', amount: 1000, group: 'salary' },
        { id: 2, text: 'Candy', amount: -10, group: 'food' },
        { id: 3, text: 'Book', amount: -10, group: 'hobby' },
        { id: 4, text: 'Camera', amount: -150, group: 'hobby' },
        { id: 5, text: 'Flower', amount: -20, group: 'gift' }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
