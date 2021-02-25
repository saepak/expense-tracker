import './App.css'
import React from 'react'
import Header from './components/Header'
import Expenses from './components/Expenses'

import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import Graph from './components/Graph'
import Login from './components/oauth/Login'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <>
    <Login />
    <Header />
    <GlobalProvider>
    <div className='container'> 
      <div className='content-box'>
        <Expenses />
        <AddTransaction />
      </div>
      <div className='content-box right-box'>
        <TransactionList />
      </div>
    </div>
    </GlobalProvider>
    </>
  );
}

export default App;

// code source is from https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb