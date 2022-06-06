import { DraggableContainer, DraggableChild } from "react-dragline";
import './style.css'
import { useState, useEffect, useRef } from 'react';
import { FormName } from '../Nodes';
import { boxesIntersect } from "@air/react-drag-to-select";
import {
    onDrop,
    onDragOver,
    handleDeselectNodes,
    handleUpdateNode,
    handleMultipleSelectDrag
} from '../FunctionalData';
import MagnifyBase from "./MagnifyBase";

function Base(props) {
    let data = props?.elements;

    const [key, setKey] = useState("");
    const [draw, setDraw] = useState(false);
    const [cursor, setCursor] = useState("grab");
    const [rec, setRec] = useState({ width: 8, height: 3 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [endPos, setEndPos] = useState({ x: 0, y: 0 });
    const [selectedIds, setSelectedIds] = useState([]);
    const [isScrolling, setScrolling] = useState(false);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [baseWidth, setBaseWidth] = useState(1200);
    const [baseZoom, setBaseZoom] = useState(100);
    const selectableItems = useRef([]);
    const base = useRef();

    useEffect(() => {
        handleMultipleSelectDrag(selectedIds, props?.elements, props?.setElements);
    }, [selectedIds])

    const onSelectionChange = (box) => {
        const indexesToSelect = [];
        selectableItems.current.forEach((item, index) => {
            if (boxesIntersect(box, item)) {
                const itemID = `node_${index + 1}`;
                indexesToSelect.push(itemID);
            }
        });
        // props?.handleMultipleSelectDrag(indexesToSelect);
        setSelectedIds(indexesToSelect);
        console.log(indexesToSelect, "intersection")
    }
    const componentDidMount = () => {

        selectableItems.current = [];
        if (document.getElementById('formBase').children[1].children) {
            Array.from(document.getElementById('formBase').children[1].children).forEach((item, index) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                // const topUpdated = top +110;

                selectableItems.current.push({
                    left,
                    top: top + 110,
                    width,
                    height
                });
            });
        }
    };
    const componentDidUpdate = () => {

        selectableItems.current = [];
        if (document.getElementById('formBase').children[1].children) {
            Array.from(document.getElementById('formBase').children[1].children).forEach((item, index) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                // const topUpdated = top +110;
                selectableItems.current.push({
                    left,
                    top: top + 110,
                    width,
                    height
                });
            });
        }
    };

    const handleOnDrop = (event) => {
        onDrop(event, props?.elements, props?.setElements, props?.copiedNodes, props?.setCopiedNodes);

    }

    const style = {
        color: '#333',
        border: '1px solid #dedede',
        borderRadius: '1px',
        backgroundColor: '#f9f9f9',
        width: '980px',
        minHeight: "80vh",
        height: "80vh",
        outline: 'none',
        overflow: 'hidden',
        cursor: cursor
    }

    const square = {
        position: "absolute",
        top: startPos.y,
        left: startPos.x,
        width: rec.width,
        height: rec.height,
        border: "1px solid #3488f7",
        backgroundColor: "#559cfa",
        opacity: 0.5
    }

    const containerStyle = {
        position: "relative",
        height: "100vh",
        width: `${baseWidth}px`,
        zoom: `${baseZoom}%`,
    };

    const handleClick = (event) => {
        console.log(event.target.id);
    }

    const handleKeyDown = (event) => {
        setKey(event.key);
        // console.log(event.key);
        event.key == "Control" && setCursor("crosshair");
    }

    const onDragStartHandler = (event, id, width, height) => {
        let rect = event.target.getBoundingClientRect();
        const position = { y: rect.top - 145.59375, x: rect.left - 300 };
        handleUpdateNode(event, id, position, width, height, props?.elements, props?.setElements);
    }

    const deselectNodes = (event) => {
        if (key != "Control") {
            handleDeselectNodes(event, props?.elements, props?.setElements, props?.setNodeProperty, props?.setPropertyVisible)
        }
    }

    const onMouseDown = (e) => {
        if (key == "Control") {
            let x = e.clientX;
            let y = e.clientY;
            setDraw(true);
            setStartPos({ x: x, y: y });
            // console.log(x, y);
        }
        setScrolling(true);
        setClientX(e.clientX);
        setClientY(e.clientY);
        console.log(window.innerHeight, "height")
        console.log(window.innerWidth, "width")

    }

    const onMouseUp = (e) => {
        if (key == "Control") {
            setDraw(false);
            // console.log(e.clientX, e.clientY);
            const box = { left: startPos.x, top: startPos.y + 100, width: rec.width, height: rec.height }
            console.log("selection Complete", box);
            onSelectionChange(box);
        }
        componentDidMount();
        setScrolling(false);
    }

    const onMouseMove = (e) => {
        if (key == "Control") {
            let x = e.clientX;
            let y = e.clientY;
            setEndPos({ x: x, y: y });
            let w = x - startPos.x;
            let h = y - startPos.y;
            setRec({ width: w, height: h })
        }
        if (isScrolling == true) {
            base.current.scrollLeft = scrollX - e.movementX;
            base.current.scrollTop = scrollY - e.movementY;
            setScrollX(base.current.scrollLeft);
            setScrollY(base.current.scrollTop);
            setClientX(e.clientX);
            setClientY(e.clientY);

        }
        else {
            setDraw(false)
            // console.log(x, y, "position");
            // let x = e.clientX - 260;
            // let y = e.clientY - 120; 
            // if (x >= 750) {
            //     console.log("moving");
            //     // let w = baseWidth;
            //     // setBaseWidth(w+=10)
            // }
        }
    }

    return (
        <div className="container-base">
            <FormName style={{ padding: "8px 22px", marginBottom: "6px", fontSize: "20px", textAlign: "center", fontWeight: "bold" }} name={data?.formName} setElements={props?.setElements} />
            <div
                onKeyDown={handleKeyDown}
                onKeyUp={(e) => { setKey(""); setCursor("grab"); }}
                onDrop={handleOnDrop}
                onDragOver={onDragOver}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                style={style}
                className="base-scrollable-container"
                id="formBase"
                // onClick={props?.handleDeselectNodes}
                onClick={deselectNodes}
                ref={base}
                tabIndex="0">

                <div style={draw ? square : { display: "none" }}></div>

                <DraggableContainer style={containerStyle} id="dragContainer">
                    {data?.nodes?.map(element => {
                        if (element.type) {
                            return (
                                <DraggableChild style={{ position: "absolute" }} onDrag={(e) => onDragStartHandler(e, element?.id, element?.width, element?.height)} key={element?.id} defaultPosition={element?.position}>
                                    <div>
                                        {<element.component
                                            setNodeProperty={props?.setNodeProperty}
                                            setPropertyVisible={props?.setPropertyVisible}
                                            elements={props?.elements}
                                            setElements={props?.setElements}
                                            copiedNodes={props?.copiedNodes}
                                            setCopiedNodes={props?.setCopiedNodes}
                                            componentDidMount={componentDidMount}
                                            // componentDidUpdate={componentDidUpdate}
                                            data={element} />}
                                    </div>
                                </DraggableChild>
                            )

                        }
                    })}
                </DraggableContainer>
            </div>
            <MagnifyBase 
                baseZoom={baseZoom}
                setBaseZoom={setBaseZoom} />
        </div>
    );
}

export default Base;