import React from 'react';

export default function Button(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Button</h3>
                <span>Name:</span>
                <input value={props?.inputFieldLabel} onChange={props?.handleName} type="text" />
                <span>Type:</span>
                <select onChange={props?.handleSelectChange}>
                    {props?.nd?.inputTypes.map((it) => {
                        return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                    })}
                </select>
            </div>
        </div>
    )
}