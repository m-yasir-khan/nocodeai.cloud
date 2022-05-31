import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import { Resizable } from "re-resizable";

function Label(props) {
    let data = props?.data;
    data.type = "label";

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
            <div className='input-field-node' style={{ textAlign: data?.align }}>
                <label style={{ marginRight: "10px", fontSize: data?.size, textTransform: data?.textTransform, fontWeight: data?.fontWeight, backgroundColor: data?.bgColor, color: data?.color }}>{data?.label}</label>
            </div>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div className="label-base">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default Label;