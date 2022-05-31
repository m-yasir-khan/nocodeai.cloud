import {constants} from '../../../Utils/constants'
import '../style.css';


function Circle(props) {
    let data = props.data
    let style = { 
        height: data.height,
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
            <div className='input-field-node'>
                <constants.CgShapeCircle className='bpm-icon-style'>
                    <label style={{ marginRight: "10px", fontSize: data.size }}>{data.name} :</label>
                </constants.CgShapeCircle>
            </div>
        </div>
    );
}

export default Circle;