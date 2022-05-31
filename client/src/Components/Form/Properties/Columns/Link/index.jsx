import React from 'react';

export default function Link(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Link</h3>
                <span>Name:</span>
                <input placeholder={props?.label} onChange={props?.handleName} type="text" />
                <span>URL:</span>
                <input placeholder={props?.link} onChange={props?.handleLink} type="text" />
            </div>
        </div>
    )
}