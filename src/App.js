import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import Login from './components/oauth/Login'
import Logout from './components/oauth/Logout'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
        <Login />
        <Logout />
      <div className='container'>
        {/* <Header />
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList /> */}
      </div>
    </GlobalProvider>
  );
}

export default App;

// code source is from https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb