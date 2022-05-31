import '../style.css';


function CheckboxNode(props) {
    return (
        <div className="flow-label">
            <div className='input-field-node'>
                <input style={{marginRight: "4px"}} type="radio" />
                <label>{props.data.name}</label>
            </div>
        </div>
    );
}

export default CheckboxNode;