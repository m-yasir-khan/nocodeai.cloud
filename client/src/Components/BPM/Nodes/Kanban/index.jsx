import './style.css';
import Tooltip from '../Tooltip';
import { useState, useEffect } from 'react';
import { Resizable } from 're-resizable';
import { constants } from '../../../../Utils/constants'
import { Rnd } from "react-rnd";
import ResizeHandle from "../resizeHandle";
import { flagBottom, flagTop, flagLeft, flagRight } from '../nodesFlag';

function Kanban(props) {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [x1, setX1] = useState(10);
    const [y1, setY1] = useState(10);

    let data = props?.data;
    // data.type = "swimlane";

    const [flag, setFlag] = useState(false);
    const [dimension, setDimension] = useState();

    useEffect(() => {
        // Your code here
        props?.componentDidMount();
    }, []);

    useEffect(() => {
        // props?.componentDidUpdate();
    });

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

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }
    const updatePosition = (position) => {
        setX1(position.x);
        setY1(position.y);
    }
    const updateParentPosition = () => {
        const position = { x: x1, y: y1 };
        props?.updateParentPosition(position);
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
            position={{ x: 10, y: 10 }}
            className="bg_kanban"
            onDragStop={(e, d) => {
                // setX1(d.x); setY1(d.y);
            }}
            onDrag={(e, d) => {
                setX1(d.deltaX+x1); 
                setY1(d.deltaY+y1);
                const position = { x: x1, y: y1 };

                props?.updateParentPosition(position);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                console.log(position);
                setWidth(ref.style.width);
                setHeight(ref.style.height);
                setX1(position.x); 
                setY1(position.y);
            }}
        >
            <div className="Merge" onDrag={e => { console.log("drag called") }}>
                <p>{data.label}</p>
            </div>
        </Rnd>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div onClick={(event) => {

            if (event.ctrlKey) {
                props?.handleMultipleSelectNode(data?.id);
                event.stopPropagation();
            }
            else {
                props?.handleSelectNode(data?.id);
                event.stopPropagation();
            }
            // console.log(`data ID ${data?.id}`)
        }
        }
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