import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import { useState, useEffect } from 'react';
import { Resizable } from "re-resizable";

function UploadImage(props) {
    let data = props?.data;
    data.type = "image";

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
            <div>
                <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "4px", textAlign: "center", color: "#a1a1a1" }}>
                    <img src={data?.image} height={data?.height} width={data?.width} />
                </div>
            </div>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div className="inputtext">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default UploadImage;