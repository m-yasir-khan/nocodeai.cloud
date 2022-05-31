import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
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

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function TransferList(props) {
    let data = props?.data;
    data.type = "transferlist";

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

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

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
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>{customList(left)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllRight}
                            disabled={left.length === 0}
                            aria-label="move all right"
                        >
                            ≫
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllLeft}
                            disabled={right.length === 0}
                            aria-label="move all left"
                        >
                            ≪
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>{customList(right)}</Grid>
            </Grid>
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

export default TransferList;