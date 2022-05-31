import '../style.css';
import { Handle } from 'react-flow-renderer';

function IONode(props) {
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
            <div className='io-node'>
            <Handle
        type="target"
        position="top"
        style={{ background: '#555' }}
        id = "a"
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        id = "b"
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <Handle
        type="source"

        position="bottom"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
               <label className='centered'>INPUT/OUTPUT</label>
            </div>
            
        </div>
    );
}

export default IONode;