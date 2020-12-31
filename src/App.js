import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import Logout from './components/oauth/Logout'
import Login from './components/oauth/Login'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <>
    <Login />
      <GlobalProvider>
      <div className='container'> 
        <Header />
        <Logout />
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList />
      </div>
    </GlobalProvider>
      </>
  );
}

export default App;

// code source is from https://www.youtube.com/watch?v=XuFDcZABiDQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb