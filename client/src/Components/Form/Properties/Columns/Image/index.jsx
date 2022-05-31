import React from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function Image(props) {
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Image</h3>
                <input onChange={(e) => {
                    let image = e.target.files[0];
                    let objectURL = URL.createObjectURL(image);
                    singleDataChange(objectURL, props?.data?.id, "image", props?.elements, props?.setElements)
                    }} type="file" />
            </div>
        </div>
    )
}