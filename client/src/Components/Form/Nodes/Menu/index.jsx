import {useState} from 'react';
import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import Rating from '@mui/material/Rating';
import React from 'react';
import { Resizable } from "re-resizable";
import {flagBottom, flagTop, flagLeft, flagRight} from '../nodesFlag';
import ResizeHandle from "../resizeHandle";
import {
    copyNode,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes
} from '../../FunctionalData';

function RatingNode(props) {
    let data = props?.data;
    data.type = "rating";

    const [flag, setFlag] = useState(false);
    const [dimension, setDimension] = useState();

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
        setDimension({ width: e.clientX, height: e.clientY })
    };

    const handleStyles = {
        top: flag
            ? flagTop
            : "",
        left: flag
            ? flagLeft
            : "",
        bottom: flag && flagBottom,
        right: flag
            ? flagRight
            : ""
    }

    const handleComponent = {
        topRight: flag ? <ResizeHandle /> : "",
        topLeft: flag ? <ResizeHandle /> : "",
        bottomLeft: flag ? <ResizeHandle /> : "",
        bottomRight: flag ? <ResizeHandle /> : ""
    }

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let element = (
        <Resizable
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
            <Rating
                name="rating"
                value={value}
                onChange={handleChange}
            />
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div onClick={(event) => props?.handleSelectNode(event, data?.id)} className="input-text-base">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default RatingNode;