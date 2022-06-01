import { DraggableContainer, DraggableChild } from "react-dragline";
import './style.css'
import { useState, useEffect, useRef } from 'react';
// import { FormName } from '../Nodes';
import { boxesIntersect } from "@air/react-drag-to-select";
import {
    onDrop,
    onDragOver,
    handleDeselectNodes,
    handleUpdateNode,
    handleMultipleSelectDrag
} from '../FunctionalData';

function Base(props) {
    let data = props?.elements;

    const [key, setKey] = useState("");
    const [draw, setDraw] = useState(false);
    const [cursor, setCursor] = useState("grab");
    const [rec, setRec] = useState({ width: 8, height: 3 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [endPos, setEndPos] = useState({ x: 0, y: 0 });
    const [selectedIds, setSelectedIds] = useState([]);
    const selectableItems = useRef([]);

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
                console.log(selectableItems.current);
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
        width: '100%',
        minHeight: "80vh",
        height: "80vh",
        outline: 'none',
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
        height: "100%",
        width: "100%"
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
    }

    const onMouseUp = (e) => {
        if (key == "Control") {
            setCursor("grab")
            setDraw(false);
            // console.log(e.clientX, e.clientY);
            const box = { left: startPos.x, top: startPos.y + 100, width: rec.width, height: rec.height }
            console.log("selection Complete", box);
            onSelectionChange(box);
        }
        componentDidMount();
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
        else {
            setDraw(false)
        }
    }

    return (
        <div className="container-base">
            {/* <FormName style={{ padding: "8px 22px", marginBottom: "6px", fontSize: "20px", textAlign: "center", fontWeight: "bold" }} name={data?.formName} setElements={props?.setElements} /> */}
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
        </div>
    );
}

export default Base;