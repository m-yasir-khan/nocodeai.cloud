import React from 'react';

export default function ToggleButton(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Toggle Button</h3>
                <span>Name:</span>
                <input value={props?.inputFieldLabel} onChange={props?.handleName} type="text" />
                
            </div>
        </div>
    )
}