import React,{useState} from 'react';
import { singleDataChange } from '../../../FunctionalData';

export default function TextArea(props) {
    const [name, setName] = useState(props?.data?.label);

    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>{props?.data?.id}</h3>
                <span>Name:</span>
                <input value={props?.inputFieldLabel} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                {/* <span>Type:</span>
                <select onChange={props?.handleSelectChange}>
                    {props?.nd?.inputTypes.map((it) => {
                        return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                    })}
                </select> */}
            </div>
        </div>
    )
}