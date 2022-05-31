import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants';
import { Resizable } from "re-resizable";

function Container(props) {
    let data = props?.data;
    data.type = "container";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    const onDrop = (event) => {
        const type = event.dataTransfer.getData("field");
        console.log(type)
        props?.onDrop("");
    }

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    let element = (
        <Resizable
            style={{ textAlign: "center", borderRadius: "4px", backgroundColor: "#ffffff", border: "1px solid #dedede" }}
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
            <div style={{ display: "flex", margin: "auto", textAlign: "center", width: "100%" }}>
                <div style={{ border: "1px solid #a1a1a1", width: "100%", borderRadius: "4px 4px 0 0" }}>
                    <label>Header</label>
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

export default Container;

