import '../style.css';
import { Handle } from 'react-flow-renderer';
import {GiLogicGateOr} from 'react-icons/gi'

function OrNode(props) {
    let data = props.data;

    let style = { 
        height: data.height,
        fontSize: data.size,
        width: data.width,
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        paddingTop: data.paddingTop,
        paddingBottom: data.paddingDown,
        paddingLeft: data.paddingLeft,
        paddingRight: data.paddingRight
    }
    return (
        <div className="flow-label">
            <div className='and-node'>
            <Handle
        type="target"
        position="left"
        id='a'
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        type="target"
        position="left"
        id='b'
        style={{ background: '#555', top:35}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        type="source"
        position="right"
        id='c'
        style={{ background: '#555', top:50}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
             
               <GiLogicGateOr className='img-style' />
               <span>OR GATE</span>
            </div>
            
        </div>
    );
}

export default OrNode;