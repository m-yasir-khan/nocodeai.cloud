import {useState} from 'react';
import Tooltip from '../../Tooltip';
import './style.css';
import {
    changeFormName
} from '../../FunctionalData'

export default function FormName(props) {
    let label = "Form";
    if(props?.name) {
        label = props?.name
    }

    const [toggle, setToggle] = useState(false);
    const [formName, setFormName] = useState(label);

    let element = "";

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            changeFormName(event.target.value, props?.setElements);
            setToggle(false);
            event.preventDefault();
        }
    }

    const onChange = (event) => {
        event.preventDefault();
        setFormName(event.target.value);
    }

    if(toggle == false) {
        element = <div className='formname'><label>{label}</label></div>;
    }
    if(toggle == true) {
        element = <div className='formname'><input type="text" onKeyDown={onKeyPress} value={formName} onChange={onChange} /></div>
    }
    

    const onClickSetting = () => {
        // props?.properties();
        setToggle(!toggle);
    }

    return (
        <div style={props?.style}>
            <Tooltip element={element} onClickSetting={onClickSetting}  />
        </div>
    )
}