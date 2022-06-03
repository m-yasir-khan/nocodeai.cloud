import './style.css';
import Tooltip from '../Tooltip';
import { useState, useEffect } from 'react';
import { Resizable } from 're-resizable';
import { constants } from '../../../../Utils/constants'
import { Rnd } from "react-rnd";
import ResizeHandle from "../resizeHandle";
import { flagBottom, flagTop, flagLeft, flagRight } from '../nodesFlag';
import {
    copyNode,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes
} from '../../FunctionalData';

function Kanban(props) {
    let data = props?.data;
    data.type = "kanban";

    const [multiple, setMultiple] = useState(false);
    const [fired, setFired] = useState(false);
    const [width, setWidth] = useState(data?.width);
    const [height, setHeight] = useState(data?.height);

   

    const onClickSetting = (event) => {
        data?.properties(event, data, props?.setNodeProperty, props?.setPropertyVisible);
    }

    const onClickDelete = (event) => {
        data?.delete(event, data, props?.elements, props?.setElements);
    }

    const handleClick = (event) => {
        multiple ? selectMultipleNodes(event, data?.id, props?.elements, props?.setElements) : handleSelectNode(event, data?.id, props?.elements, props?.setElements);
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
    const style = {
        color: "#333",
        border: "1px solid #dedede",
        display: "block",
        borderRadius: "1px",
        backgroundColor: "#f9f9f9",
        width: "100%",
        padding: "30px"
    }

    const handleComponent = {
        topRight: data?.selected ? <ResizeHandle /> : "",
        topLeft: data?.selected ? <ResizeHandle /> : "",
        bottomLeft: data?.selected ? <ResizeHandle /> : "",
        bottomRight: data?.selected ? <ResizeHandle /> : ""
    }



    // const handleResizeStart = (e, direction) => {
    //     if (
    //         // direction !== "bottomLeft" &&
    //         direction !== "topLeft" &&
    //         direction !== "top" &&
    //         direction !== "left"
    //     ) {
    //         e.stopPropagation();
    //     }
    //     setDimension({ width: e.clientX, height: e.clientY });
    //     props?.componentUpdated();
    // };

    let element = (
        <Rnd
            style={style}
            size={{ width: width, height: height }}
            resizeHandleComponent={handleComponent}
            resizeHandleStyles={handleStyles}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            position={{ x: 10, y: 10 }}
            className="bg_kanban"
            onDragStop={(e, d) => {
                // setX1(d.x); setY1(d.y);
            }}
            onDrag={(e, d) => {

            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setWidth(ref.style.width);
                setHeight(ref.style.height);
            }}
        >
            <div className="Merge" onDrag={e => { console.log("drag called") }} onClick={handleClick}>
                <p>{data.label}</p>
            </div>
        </Rnd>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div onClick={handleClick}
            className="alert">
            <Tooltip element={element} tooltip={
                <div style={{ display: "block" }}>
                    <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                    <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
                </div>} />
        </div>
    );
}

export default Kanban;