import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { Resizable } from "re-resizable";

function ToggleButtonNode(props) {
    let data = props?.data;
    data.type = "togglebutton";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

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
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="web">Button 1</ToggleButton>
                <ToggleButton value="android">Button 2</ToggleButton>
                <ToggleButton value="ios">Button 3</ToggleButton>
            </ToggleButtonGroup>
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

export default ToggleButtonNode;