import React, { useState } from 'react';
import { constants } from '../../../Utils/constants';
import DefaultProperties from './Columns/Default';
import handleElements from './elementStructure';

export default (props) => {
    let nd = props?.nodeDetail;
    
    let NodeProperty;
    nd ? NodeProperty = handleElements(nd.type) : NodeProperty = DefaultProperties

    return (
        <>
            {<NodeProperty 
                visibility={props?.visible} 
                elements={props?.elements}
                setElements={props?.setElements}
                setNodeProperty={props?.setNodeProperty}
                data={props?.nodeDetail} />}
        </>
    )
}
        
