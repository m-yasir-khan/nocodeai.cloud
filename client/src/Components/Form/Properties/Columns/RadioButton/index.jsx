import React,{useState} from 'react';
import { constants } from '../../../../../Utils/constants';
import {
    singleDataChange,
    addObjInArray,
    remObjInArray
} from '../../../FunctionalData'
export default function RadioButton(props) {
    const [name, setName] = useState(props?.data?.label);
    console.log(props?.data?.options,'props?.data?.options')
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>{props?.data?.id}</h3>
                <span>Question:</span>
                <textarea style={{ width: "100%", outline: "none" }} value={props?.checkboxQuestion} onChange={(e) => { setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "question", props?.elements, props?.setElements);}}></textarea>
                <span>Options:</span>
                <div style={{ display: "flex", marginBottom: "6px" }}>
                    <input id="dropdownOption" type="text" style={{ marginBottom: "0px" }} />
                    <button style={{ marginLeft: "2px" }} onClick={() => { addObjInArray(document.getElementById("dropdownOption").value, props?.data?.id, "options", props?.elements, props?.setElements, props?.setNodeProperty); document.getElementById("dropdownOption").value = ""; }}>Add</button>
                </div>
                {props?.data?.options?.map((item) => {
                    return (
                        <div key={item?.id} style={{ display: "flex" }}>
                            <label value={item.value}>{item?.value}</label>
                            <constants.CgRemove onClick={() => { remObjInArray(props?.data?.id, item?.id, "options", props?.elements, props?.setElements, props?.data, props?.setNodeProperty) }} style={{ color: "red", marginLeft: "6px", cursor: "pointer" }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}