import React,{useState, useContext} from 'react'
import { Button, Modal } from 'antd'
import { GlobalContext } from '../context/GlobalState'
import { Doughnut } from 'react-chartjs-2'


const Graph = () => {

    const { transactions } = useContext(GlobalContext)

    const data = {
        labels: ['hobby','food','gift','util', 'other'],
        datasets: [
            {
                label : 'Sales for 2020(M)',
                data: [ -200, -100, -12, 0, 0],
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
                type="primary" 
                onClick={showModal} 
                className='graph-btn'
            >
                View Chart
            </Button>
            <Modal title='Expense Chart' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Doughnut data={data} options={{maintainAspectRatio : false}}/>
            </Modal>
        </div>
    )
}

export default Graph