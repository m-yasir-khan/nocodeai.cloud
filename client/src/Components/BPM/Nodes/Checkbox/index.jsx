import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Resizable } from "re-resizable";

function CheckboxNode(props) {
    let data = props?.data;
    data.type = "checkbox";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    const [checked, setChecked] = useState("");

    const handleChange = event => {
        setChecked(event.target.value);
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
            <div className='input-field-node'>
                <label style={{ marginRight: "10px", fontSize: "14px" }}>{data?.question} :</label><br />
                <div className='checkboxes'>
                    <FormGroup onChange={handleChange}>
                        {data?.options?.map((item) => {
                            return <FormControlLabel value={item.value} control={<Checkbox checked={checked === item.value} />} key={item.id} label={item.value} />
                        })}
                    </FormGroup>
                </div>
            </div>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div className="checkbox-base">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default CheckboxNode;