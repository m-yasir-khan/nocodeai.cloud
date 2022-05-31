import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import { Resizable } from "re-resizable";

export default function RTF(props) {
    const myTheme = createTheme({
        // Set up your custom MUI theme here
    })

    let data = props?.data;
    data.type = "rtf";

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
            <div style={{ textAlign: "left", padding: "10px" }}>
                <ThemeProvider theme={myTheme}>
                    <MUIRichTextEditor label="Start typing..." />
                </ThemeProvider>
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