import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React from 'react';
import { Resizable } from "re-resizable";

function ProgressNode(props) {
    let data = props?.data;
    data.type = "progress";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    let element = (
        <Resizable
            style={{ textAlign: "center" }}
            defaultSize={{ width: data?.width, height: data?.height }}
            onResizeStart={props?.handleResizeStart}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            handleStyles={props?.handleStyles}
            handleComponent={props?.handleComponent}
            resizeRatio={1}
        >
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div className="input-text-base">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default ProgressNode;