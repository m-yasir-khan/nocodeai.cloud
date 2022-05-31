import { DraggableContainer, DraggableChild } from "react-dragline";
import { Resizable } from "re-resizable";
import ResizeHandle from "./resizeHandle";
import './style.css'
import { useState } from 'react';
import { FormName } from '../Nodes';
import DragSelect from './dragSelect';

function Base(props) {
    let data = props?.elements;
    const [flag, setFlag] = useState(false);
    const [dimension, setDimension] = useState();


    const onDragOver = (event) => {
        props?.onDragOver(event);
    };

    const onPaneClick = () => {
        props?.onPaneClick();
        console.log("Clicked on container")
    }


    const onDrop = (event) => {
        props?.onDrop(event);
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

    const containerStyle = {
        position: "relative",
        height: "100%",
        width: "100%"
    };

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

    const flagTop = {
        marginTop: -3,
        marginLeft: -5,
        top: 0,
        left: "50%",
        cursor: "ns-resize",
        border: "3px solid #999",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        borderWidth: 5,
        borderColor: "#4d4d4d",
        width: 10,
        height: 10,
        boxSizing: "border-box",
        zIndex: 1
    }

    const flagLeft = {
        marginTop: -5,
        marginLeft: -3,
        top: "50%",
        left: 0,
        cursor: "ew-resize",
        border: "3px solid #999",
        borderTop: "none",
        borderRight: "none",
        borderBottom: "none",
        borderWidth: 5,
        borderColor: "#4d4d4d",
        width: 10,
        height: 10,
        boxSizing: "border-box",
        zIndex: 1
    }

    const flagBottom = {
        marginTop: -7,
        marginLeft: -5,
        top: "100%",
        left: "50%",
        cursor: "ns-resize",
        border: "3px solid #999",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        borderWidth: 5,
        borderColor: "#4d4d4d",
        width: 10,
        height: 10,
        boxSizing: "border-box",
        zIndex: 1
    }

    const flagRight = {
        marginTop: -5,
        marginLeft: -7,
        top: "50%",
        left: "100%",
        cursor: "ew-resize",
        border: "3px solid #999",
        borderTop: "none",
        borderLeft: "none",
        borderBottom: "none",
        borderWidth: 5,
        borderColor: "#4d4d4d",
        width: 10,
        height: 10,
        boxSizing: "border-box",
        zIndex: 1
    }

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

    const onDragStart = (event) => {
        console.log("Dragging");
    }

    return (
        <div className="container-base">
            <div
                onDrop={onDrop}
                onDragOver={onDragOver}
                style={style}>

                {/* <FormName name={data?.formName} properties={props?.properties} changeFormName={props?.changeFormName} /> */}

                <DraggableContainer style={containerStyle}>
                    {data?.nodes?.map(element => {
                        if (element.type) {
                            return (
                                <DraggableChild key={element.id} defaultPosition={element.position}>
                                    <div
                                        onMouseDownCapture={() => {
                                            setFlag(true);
                                        }}
                                        onMouseUpCapture={() => {
                                            setFlag(false);
                                        }}>
                                        {<element.component
                                            key={element?.id}
                                            defaultPosition={element?.position}
                                            setFlag={setFlag}
                                            handleResizeStart={handleResizeStart}
                                            handleStyles={handleStyles}
                                            handleComponent={handleComponent}
                                            properties={element?.properties}
                                            delete={element?.delete}
                                            width={element?.width}
                                            height={element?.height}
                                            onDragOver={element.onDragOver}
                                            onDrop={element.onDrop}
                                            data={element} />}
                                    </div>
                                </DraggableChild>
                            )

                        }
                    })}
                </DraggableContainer>
            </div>
        </div>
    );
}

export default Base;