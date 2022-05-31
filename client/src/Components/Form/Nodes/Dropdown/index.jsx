import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState,useEffect } from 'react';
import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import { Resizable } from "re-resizable";
import { flagBottom, flagTop, flagLeft, flagRight } from '../nodesFlag';
import ResizeHandle from "../resizeHandle";
import {
    copyNode,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes
} from '../../FunctionalData';

function SelectNode(props) {
    let data = props?.data;
    data.type = "dropdown";

    const [dimension, setDimension] = useState();
    const [selectedValue, setSelectedValue] = useState("");
    const [multiple, setMultiple] = useState(false);
    const [fired, setFired] = useState(false);
    const [width, setWidth] = useState(data?.width);
    const [height, setHeight] = useState(data?.height);

    
    useEffect(() => {
        props?.componentDidMount();
    }, []);

    
    const onClickSetting = (event) => {
        data?.properties(event, data, props?.setNodeProperty, props?.setPropertyVisible);
    }

    const onClickDelete = (event) => {
        data?.delete(event, data, props?.elements, props?.setElements);
    }

    const handleResizeStart = (e, direction) => {
        if (
            // direction !== "bottomLeft" &&
            direction !== "topLeft" &&
            direction !== "top" &&
            direction !== "left"
        ) {
            e.stopPropagation();
        }
    };

    const handleClick = (event) => {
        multiple ? selectMultipleNodes(event, data?.id, props?.elements, props?.setElements) : handleSelectNode(event, data?.id, props?.elements, props?.setElements);
    }

    const handleKeyDown = (event) => {
        if(!fired) {
            if (event.key === 'Shift') {
                setMultiple(true);
            }
            else {
                setMultiple(false);
            }
            setFired(true);
        }
        copyNode(event, props?.elements, props?.setElements, props?.copiedNodes, props?.setCopiedNodes);
    }

    const handleKeyUp = (event) => {
        setFired(false); 
        setMultiple(false);
    }

    const handleStyles = {
        top: data?.selected
            ? flagTop
            : "",
        left: data?.selected
            ? flagLeft
            : "",
        bottom: data?.selected && flagBottom,
        right: data?.selected
            ? flagRight
            : ""
    }

    const handleComponent = {
        topRight: data?.selected ? <ResizeHandle /> : "",
        topLeft: data?.selected ? <ResizeHandle /> : "",
        bottomLeft: data?.selected ? <ResizeHandle /> : "",
        bottomRight: data?.selected ? <ResizeHandle /> : ""
    }

    let element = (
        <Resizable
            size={{ width, height }}
            onResizeStop={(e, direction, ref, d) => {
                let w = width + d.width;
                let h = height + d.height
                setWidth(width + d.width);
                setHeight(height + d.height);
                handleUpdateNode(e, data?.id, data?.position, w, h, props?.elements, props?.setElements)
            }}
            style={{ textAlign: "center" }}
            defaultSize={{ width: data?.width, height: data?.height }}
            onResizeStart={handleResizeStart}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            handleStyles={handleStyles}
            handleComponent={handleComponent}
            resizeRatio={1}
        >
            <Box sx={{ minWidth: 220 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">{data?.label}</InputLabel>
                    <Select value={selectedValue} label={data?.label}>
                        {data?.options?.map((item) => {
                            return <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div 
            onClick={handleClick} 
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="inputtext"
            style={{outline: "none"}}
            tabIndex="0">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default SelectNode;