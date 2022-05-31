import '../style.css';


function InputField(props) {
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
                <label style={{ marginRight: "10px", fontSize: data.size }}>{data.name} :</label>
                <input style={style} disabled type="text" />
            </div>
        </div>
    );
}

export default InputField;