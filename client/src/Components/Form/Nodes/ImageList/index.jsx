import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useRef, useState, useEffect } from 'react';
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

function ImageListNode(props) {
    let data = props?.data;
    data.type = "imagelist";

    const spanRef = useRef(null);
    const [dimension, setDimension] = useState();
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
        if (!fired) {
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

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

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
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default ImageListNode;