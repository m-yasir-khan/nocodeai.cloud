import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'

function Swimlane(props) {
     let data = props?.data;
    // data.type = "swimlane";

    const onClickSetting = () => {
         props?.properties(data);
    }

    const onClickDelete = () => {
         props?.delete(data);
    }

    let element = (
        <div style={{width: "100%", minHeight: "98px", display: "flex", margin: "auto", height: "100%"}}>
            <div style={{writingMode: "vertical-rl", border: "1px solid #a1a1a1", transform: "rotate(180deg)",backgroundColor:'blue',color:'white'}}>{data.label}</div>
        </div>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div style={{width: "100%", minHeight: "98px", display: "flex", margin: "auto", height: "100%"}}>
            <Tooltip element={element} tooltip={
            <div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default Swimlane;