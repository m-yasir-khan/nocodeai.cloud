import { DraggableContainer, DraggableChild } from "react-dragline";
import './style.css'
import { useCallback, useEffect, useRef, useState } from 'react';
import { Rnd } from "react-rnd";
import DragSelect from './dragSelect';
import {
    Box,
    boxesIntersect,
    useSelectionContainer
} from "@air/react-drag-to-select";

function Base(props) {
    let data = props?.elements;

    const [selectionBox, setSelectionBox] = useState();
    const [selectedIndexes, setSelectedIndexes] = useState([]);
    const [render, setRender] = useState(false);
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [x1, setX1] = useState(10);
    const [x2, setX2] = useState(10);
    const [y1, setY1] = useState(10);
    const [y2, setY2] = useState(10);
    const selectableItems = useRef([]);
    const elementsContainerRef = useRef(null);


    useEffect(() => {
        // let indexes =[];
        // Array.from(selectedIndexes).forEach((selectedIndex)=>{
        //     const myID = `cont_${selectedIndex + 2}`;        
        //     // console.log("myID", myID);
        //     props?.handleMultipleSelectNode(myID);
        // });
        //  console.log(selectedIndexes, '- Has changed');
        props.handleMultiplesSelectNode(selectedIndexes);


    }, [selectedIndexes])

    const onSelectionChange = useCallback(
        (box) => {
            setSelectionBox(box);
            // console.log('box', box);
            const indexesToSelect = [];
            selectableItems.current.forEach((item, index) => {
                if (boxesIntersect(box, item)) {
                    const itemID = `cont_${index + 2}`;
                    indexesToSelect.push(itemID);
                }
            });

            setSelectedIndexes(indexesToSelect);
            // console.log('intersected:', indexesToSelect);
        },
        [selectableItems]
    );

    const { DragSelection } = useSelectionContainer({
        eventsElement: document.getElementById("myBPM"),
        onSelectionChange,
        onSelectionStart: () => {
            // console.log("OnSelectionStart");
        },
        onSelectionEnd: () => {
            //  console.log("OnSelectionEnd", selectableItems);
            // const myID = `cont_${selectedIndexes[0]+2}`;
            // console.log("myID",myID);
            // props?.handleSelectNode( 'cont_3');
        },
        selectionProps: {
            style: {
                border: "2px dashed purple",
                borderRadius: 4,
                backgroundColor: "brown",
                opacity: 0.5

            }
        }
    });



    const onDragOver = (event) => {
        props?.onDragOver(event);
    };

    const onPaneClick = () => {
        props?.onPaneClick();
        // console.log("Clicked on container")
    }
    const componentDidMount = () => {
        // console.log("component mounted");
        selectableItems.current = [];
        if (document.getElementById('myBPM').children[0].children) {
            Array.from(document.getElementById('myBPM').children[0].children).forEach((item, index) => {
                // console.log(`item ${index}`, item);
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
        // console.log("component mounted");
        selectableItems.current = [];
        if (document.getElementById('myBPM').children[0].children) {
            Array.from(document.getElementById('myBPM').children[0].children).forEach((item, index) => {
                // console.log(`item ${index}`, item);
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
    }

    const onDrop = (event) => {
        props?.onDrop(event);

    }

    const updateParentPosition = (position) => {
        console.log("new position", position);
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

    const dragComponent = (event) => {
        // console.log("draggging", document.getElementById('myBPM').children[0].children[0].style.top);
        props?.changePosition(event);
        setRender(true);


    }


    const dragover = (event) => {
        // console.Console("dragged");
    }

    return (
        <div className="container-base">
            <div
                onKeyDown={props?.copyNode}
                onDrop={onDrop}
                onDragOver={onDragOver}
                style={style}
                // onClick={(event) => props?.handleSelectNode(event, null)}
                onDoubleClick={(event) => props?.handleSelectNode(event, null)}
                id="myBPM"
            >

                {/* <DragSelection /> */}
                <DraggableContainer style={containerStyle} ref={elementsContainerRef} className="dragContainer">
                    <DragSelection />

                    {data?.nodes?.map(element => {
                        if (element.type) {
                            // { console.log("element position", element.position) }
                            return (

                                <DraggableChild key={`${element.id}`} defaultPosition={element.position} style={{ top: '300px', left: '150px' }} onDrag={dragComponent} >
                                    <div >
                                        {<element.component
                                            key={element?.id}
                                            defaultPosition={element?.position}
                                            handleSelectNode={props?.handleSelectNode}
                                            componentDidMount={componentDidMount}
                                            componentDidUpdate={componentDidUpdate}
                                            updateParentPosition={updateParentPosition}
                                            properties={element?.properties}
                                            delete={element?.delete}
                                            width={element?.width}
                                            height={element?.height}
                                            onDragOver={props?.onDragOver}
                                            onDrop={element.onDrop}
                                            handleMultipleSelectNode={props.handleMultipleSelectNode}
                                            data={element} />}
                                    </div>
                                    {/* <Rnd
                                        style={style}
                                        size={{ width: width, height: height }}
                                        position={{ x: x1, y: y1 }}
                                        
                                        onDragStop={(e, d) => {
                                            setX1(d.x);setY1(d.y);
                                        }}
                                        onResizeStop={(e, direction, ref, delta, position) => {
                                            console.log(position);
                                            setWidth(ref.style.width);
                                            setHeight(ref.style.height);
                                            setX1(position.x);setY1(position.y);
                                        }}
                                    >
                                        Rnd
                                    </Rnd> */}
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