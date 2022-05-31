import '../style.css';
import { Handle } from 'react-flow-renderer';

function EndLabel(props) {
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
            <div className='Start-node'>
            <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
               <label className='centered'>END</label>
            </div>
            
        </div>
    );
}

export default EndLabel;