import React from 'react';

export default function Spacer(props) {
    const { spacing } = props
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Spacer</h3>
                <span>Spacing:</span>
                <input value={spacing} onChange={props?.changeSpacing} type="number" />
            </div>
        </div>
    )
}