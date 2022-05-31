import './style.css';
import Tooltip from '../../Tooltip';
import { constants } from '../../../../Utils/constants'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Resizable } from "re-resizable";

function SelectNode(props) {
    let data = props?.data;
    data.type = "dropdown";

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
            <Box sx={{ minWidth: 220 }}>
                <FormControl size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">{data?.label}</InputLabel>
                    <Select disabled label={data?.label}>
                        {data?.options?.map((item) => {
                            return <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
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

export default SelectNode;