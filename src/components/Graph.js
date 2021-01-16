import React,{useState, useContext} from 'react'
import { Button } from 'antd'
import { GlobalContext } from '../context/GlobalState'


const Graph = () => {

    const { transactions } = useContext(GlobalContext)
    const [graph, setGraph] = useState(false)

    const showGraph = () => {
        if(graph === false) {
            setGraph(true)
        } else {
            setGraph(false)
        }
    }

    return (
        <div style={{marginBottom: 20}}>
            <Button 
                type="primary" 
                onClick={showGraph} 
                className='graph-btn'
            >
                View Graph
            </Button>
            <div className={ graph ? 'graphBox' : 'noGraphBox'}>
                Graph will be here
            </div>
        </div>
    )
}

export default Graph