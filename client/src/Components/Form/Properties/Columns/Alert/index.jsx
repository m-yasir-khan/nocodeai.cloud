import React from 'react';

export default function Alert(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Alert</h3>
                <span>Message:</span>
                <input placeholder={props?.message} onChange={props?.alertMessage} type="text" />
                <span>Type:</span>
                <select onChange={props?.alertType}>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="success">Success</option>
                </select>
            </div>
        </div>
    )
}