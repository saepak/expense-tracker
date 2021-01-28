import React,{useState, useContext} from 'react'
import { Button, Modal } from 'antd'
import { GlobalContext } from '../context/GlobalState'
import { Doughnut } from 'react-chartjs-2'


const Graph = () => {

    const { transactions } = useContext(GlobalContext)

    let hobbyTotal = 0
    let foodTotal = 0
    let giftTotal = 0
    let utilTotal = 0
    let otherTotal = 0

    const hobbyNum =  transactions.filter(item => item.group === 'hobby').map((num) => num.amount)
    for (const hobbyVal of hobbyNum) {
        hobbyTotal += hobbyVal
    }

    const foodNum =  transactions.filter(item => item.group === 'food').map((num) => num.amount)
    for (const foodVal of foodNum) {
        foodTotal += foodVal
    }

    const giftNum =  transactions.filter(item => item.group === 'gift').map((num) => num.amount)
    for (const giftVal of giftNum) {
        giftTotal += giftVal
    }

    const utilNum =  transactions.filter(item => item.group === 'util').map((num) => num.amount)
    for (const utilVal of utilNum) {
        utilTotal += utilVal
    }

    const otherNum =  transactions.filter(item => item.group === 'other').map((num) => num.amount)
    for (const otherVal of otherNum) {
        otherTotal += otherVal
    }

    const data = {
        labels: ['Hobby','Food','Gift','Util', 'Other'],
        datasets: [
            {
                label : 'Sales for 2020(M)',
                data: [ hobbyTotal, foodTotal, giftTotal, utilTotal, otherTotal],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)', 
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)']
            }
        ]
    }

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
      setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
      }
  
    const handleCancel = () => {
      setIsModalVisible(false)
    }

    return (
        <div style={{marginBottom: 20}}>
            <Button 
                type='primary'
                onClick={showModal} 
                className='graph-btn'
            >
                View Chart
            </Button>
            <Modal 
                title='Expense Chart' 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <Doughnut data={data} options={{height: 350, maintainAspectRatio : false}}/>
            </Modal>
        </div>
    )
}

export default Graph