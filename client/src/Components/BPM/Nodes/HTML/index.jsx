import { useEffect, useRef } from 'react';
import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import { Resizable } from "re-resizable";

function HTML(props) {
    let data = props?.data;
    data.type = "html";

    const spanRef = useRef(null);

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    let htmlObject = data?.code;

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.innerHTML = htmlObject;
        }
    });

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
            <div className='input-field-node' style={{ minHeight: "30px" }} ref={spanRef}>

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

export default HTML;