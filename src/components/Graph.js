import React,{useState} from 'react'
import { Button } from 'antd'


const Graph = () => {

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
                Graph View
            </Button>
            <div className={ graph ? 'graphBox' : 'noGraphBox'}>
                Graph will be here
            </div>
        </div>
    )
}

export default Graph