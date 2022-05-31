import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'

function Preparation(props) {
     let data = props?.data;
    // data.type = "swimlane";

    const onClickSetting = () => {
         props?.properties(data);
    }

    const onClickDelete = () => {
         props?.delete(data);
    }

    let element = (
        <div className="Preparation">
        <p>{data.label}</p>
         </div>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div style={{width: "100%", minHeight: "98px", display: "flex", margin: "auto", height: "100%"}} onClick={onClickSetting}>
            <Tooltip element={element} tooltip={
            <div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default Preparation;