import '../style.css';
import { Handle } from 'react-flow-renderer';
import {GiLogicGateAnd} from 'react-icons/gi'

function AndNode(props) {
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
             
               <GiLogicGateAnd className='img-style' />
               <span>AND GATE</span>
            </div>
            
        </div>
    );
}

export default AndNode;