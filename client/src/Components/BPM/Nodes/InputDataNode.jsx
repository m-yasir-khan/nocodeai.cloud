import '../style.css';
import { Handle } from 'react-flow-renderer';

function InputDataNode(props) {
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
        <div className='pointer' >
            <Handle
                type="target"
                position="left"
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <Handle
                type="source"
                position="right"
                style={{ background: '#555', right: -30 }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <label className='inline-text'>INPUT STREAM</label>
        </div>
    );
}

export default InputDataNode;