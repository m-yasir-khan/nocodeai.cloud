import '../style.css';
import { Handle } from 'react-flow-renderer';
import {FaDatabase} from 'react-icons/fa';

function DatabaseNode(props) {
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
           <FaDatabase className='img-style' />
           <br></br>
           <span > Database</span>
        </div>
        
    </div>
    );
}

export default DatabaseNode;