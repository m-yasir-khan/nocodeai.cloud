import React, { useState, useRef, useCallback } from 'react';
import ColorPicker from 'material-ui-color-picker';
import '../../App.css';


export default (props) => {
    let nd = props.nodeDetail;
    let visibility = props.visible;


    const handleName = (event) => {
        props.changeName(event.target.value, nd.id);
        event.preventDefault();
    }
    const handleDescription = (event) => {
        props.changeDiscription(event.target.value, nd.id);
        event.preventDefault();
    }
    const handleLeadTime = (event) => {
        props.changeLeadTime(event.target.value, nd.id);
        event.preventDefault();
    }
    const handleProcessTime = (event) => {
        props.changeProcessTime(event.target.value, nd.id);
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

    const textColor = (color) => {
        props.changeTextColor(color, nd.id);
      
    }

    const backgroundColor = (color) => {
        props.changeBackgroundColor(color, nd.id);
    }

    const handleKeyPress = (event) => {
        props.parentCallback(event.target.value, nd.id);
        event.preventDefault();
    }

    const handleSizeChange = (event) => {
        if (event.key === 'Enter') {
            // props.sizeChange(event.target.value, nd.id);
            props.changeProperty(event.target.value, nd.id,"label");
            event.preventDefault();
        }
    }

    if(nd?.type == 'inputfield') {
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
                </div>
            </div>
        );
    }
    
    else  if(nd?.type == 'conditionNode')
    {
        return (
        <div className='properties'>
        <span className='palette-header'>Properties</span>
        <div className='properties-components'>
             <span>Name:</span>
             <input onChange={handleName} type="text" />
             <span>Condition:</span>
                    <select>
                        <option value="">Equal</option>
                        <option value="">Less than</option>
                        <option value="">greater than</option>
                    </select>
        </div>
        </div>
        );
    }
    else  if(nd?.type == 'publishNode')
    {
        return (
        <div className='properties'>
        <span className='palette-header'>Properties</span>
        <div className='properties-components'>
             <span>Topic Name:</span>
             <input onChange={handleName} type="text" />    
             <span>Payload:</span>
             <input  type="text" />         
        </div>
        </div>
        );
    }
    else  if(nd?.type == 'subscribeNode')
    {
        return (
        <div className='properties'>
        <span className='palette-header'>Properties</span>
        <div className='properties-components'>
             <span>Topic Name:</span>
             <input onChange={handleName} type="text" />            
        </div>
        </div>
        );
    }
    else  if(nd?.type == 'processNode')
    {
        // console.log("process clicked");
        return (
        <div className='properties'>
        <span className='palette-header'>Properties</span>
        <div className='properties-components'>
             <span>Process Name:</span>
             <input onChange={(e) => {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
                }
                 } type="text" />  
             <span>Process Discription:</span>
             <input onChange={(e) => {
                props.changeProperty(e.target.value, nd.id,"description");
                e.preventDefault();
                }} type="text" />
             <span>Lead Time:</span>
             <input onChange={(e) => {
                props.changeProperty(e.target.value, nd.id,"lt");
                e.preventDefault();
                }} type="text" />  
             <span>Process Time:</span>
             <input onChange={(e) => {
                props.changeProperty(e.target.value, nd.id,"pt");
                e.preventDefault();
                }} type="text" />
                        
        </div>
        </div>
        );
    }
    else  if(nd?.type == 'outsideOrganization')
    {
        return (
            <div className='properties'>
                <span className='palette-header'>Properties</span>
                <div className='properties-components'>
             <span>Title:</span>
             <input onChange={handleName} type="text" />  
             </div>
            </div>
        );
    }
    else  if(nd?.type == 'container')
    {
        return (
        <div className='properties'>
        <span className='palette-header'>Properties</span>
        <div className='properties-components'>
             <span>Title:</span>
             <input onChange={handleName} type="text" />     
             <ColorPicker name='Backgroud Color'
             defaultValue='backgroud color'
             onChange={color =>{
             if(color == undefined) return;
             backgroundColor(color);
            }}
            />   
            <ColorPicker name='Font Color'
             defaultValue='font color'
             onChange={color =>{
             if(color == undefined) return;
             textColor(color);
            }}
 
            />    
        </div>
        </div>
        );
    }
    else if(nd?.type == 'swimlaneNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Title Name:</span>
         <input onChange={handleName} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'mergeNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'delayNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'connectorNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'preparationNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'loopLimitNode')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'html')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Code:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"code");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'label')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Title</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'outsideOrganization')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'processBlock')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'dataBlock')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'itSystem')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'worker')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'manualInformationFlow')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'automatedInformationFlow')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'phone')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'mail')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'faxMachine')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'inbox')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'pushSystem')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'inventory')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'controlledFifo')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'kanban')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'goSee')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'truckMovement')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'kaizenBurst')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'withdrawal')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
    </div>
    </div>
    );
    }
    else if(nd?.type == 'materialReciept')
    {
   
    return (
    <div className='properties'>
    <span className='palette-header'>Properties</span>
    <div className='properties-components'>
         <span>Name:</span>
         <input onChange={e => 
            {
                props.changeProperty(e.target.value, nd.id,"label");
                e.preventDefault();
            }} type="text" />           
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