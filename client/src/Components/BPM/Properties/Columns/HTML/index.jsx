import React from 'react';

export default function HTML(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>HTML</h3>
                <span>Code:</span>
                <textarea style={{ width: "100%", outline: "none" }} value={props?.code} onChange={props?.codeChange}></textarea>

            </div>
        </div>
    )
}