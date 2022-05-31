import React, { useState, useRef, useCallback } from 'react';
import '../../App.css';


export default (props) => {
    let nd = props.nodeDetail;
    let visibility = props.visible;
    let name = nd.data.name

    const handleName = (event) => {
        props.changeName(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleLabelSize = (event) => {
        props.changeLabelSize(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleHeight = (event) => {
        props.changeHeight(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleWidth = (event) => {
        props.changeWidth(event.target.value, nd.id);
        event.preventDefault();
    }

    const paddingTop = (event) => {
        props.changePaddingTop(event.target.value, nd.id);
        event.preventDefault();
    }

    const paddingDown = (event) => {
        props.changePaddingDown(event.target.value, nd.id);
        event.preventDefault();
    }

    const paddingLeft = (event) => {
        props.changePaddingLeft(event.target.value, nd.id);
        event.preventDefault();
    }

    const paddingRight = (event) => {
        props.changePaddingRight(event.target.value, nd.id);
        event.preventDefault();
    }

    const textColor = (event) => {
        props.changeTextColor(event.target.value, nd.id);
        event.preventDefault();
    }

    const backgroundColor = (event) => {
        props.changeBackgroundColor(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleKeyPress = (event) => {
        props.parentCallback(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleSizeChange = (event) => {
        if (event.key === 'Enter') {
            props.sizeChange(event.target.value, nd.id);
            event.preventDefault();
        }
    }

    if(nd.type == 'inputfield') {
        return (
            <div className='properties'>
                <span className='palette-header'>Properties</span>
                <div className='properties-components'>
                    <h3 style={{ textAlign: "center" }}>Input Field</h3>
                    <span>Name:</span>
                    <input onChange={handleName} type="text" />
                    <span>Type:</span>
                    <select>
                        <option value="">Number</option>
                        <option value="">Text</option>
                        <option value="">Email</option>
                        <option value="">Password</option>
                        <option value="">Address</option>
                    </select>
                    <span>Label Size:</span>
                    <input onChange={handleLabelSize} type="text" />
                    <span>Height:</span>
                    <input onChange={handleHeight} type="text" />
                    <span>Width:</span>
                    <input onChange={handleWidth} type="text" />
                    <span>Padding Top:</span>
                    <input onChange={paddingTop} type="text" />
                    <span>Padding Bottom:</span>
                    <input onChange={paddingDown} type="text" />
                    <span>Padding Left:</span>
                    <input onChange={paddingLeft} type="text" />
                    <span>Padding Right:</span>
                    <input onChange={paddingRight} type="text" />
                    <span>Text Color:</span>
                    <input onChange={textColor} type="text" />
                    <span>Background Color:</span>
                    <input onChange={backgroundColor} type="text" />
                </div>
            </div>
        );
    }
    
    

    else {
        return (
            <div className='properties'>
                <span className='palette-header'>Properties</span>
            </div>
        );
    }
};