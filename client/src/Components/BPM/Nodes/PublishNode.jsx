import '../style.css';
import { Handle } from 'react-flow-renderer';
import {MdPublish} from 'react-icons/md'

function PublishNode(props) {
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
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
           <MdPublish className='img-style' />
           <br></br>
           <span > publish to: {data.name}</span>
        </div>
        
    </div>
    );
}

export default PublishNode;