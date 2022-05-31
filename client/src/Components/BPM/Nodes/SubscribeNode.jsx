import '../style.css';
import { Handle } from 'react-flow-renderer';
import {MdUnsubscribe} from 'react-icons/md'

function SubscribeNode(props) {
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
        <div className='Database-node'>
        <Handle
        type="source"
        position="right"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
           <MdUnsubscribe className='img-style' />
           <br></br>
           <span > Subscribe to: {data.name}</span>
        </div>
        
    </div>
    );
}

export default SubscribeNode;