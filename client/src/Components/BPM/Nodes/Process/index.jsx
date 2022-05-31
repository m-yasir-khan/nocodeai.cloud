import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import { Handle ,ReactFlowProvider} from 'react-flow-renderer';

function Process(props) {
    let data = props?.data;
    // data.type = "swimlane";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    let element = (
        <ReactFlowProvider>
                <Handle
                type="target"
                position="top"
                id="a"
                style={{ background: '#555',marginTop:'-10px' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
        <div className="flow-label" style={{ width: '100%', height: '100%' }} onClick={onClickSetting}>
        
            <h3 style={{ width: '98%', position: 'absolute', top: '-8px', backgroundColor: '#027ef8', color: '#fff' }} >{data.label}</h3>
            <p style={{ position: 'relative', top: '20px', overflowWrap: 'break-word' }}>{data.description}</p>
            <div style={{ width: '100%', height: '50px', textAlign: 'center', position: 'absolute', bottom: '10px' }}>
                {/* <p style={{color: data.textColor}} >Lead Time={data.lt} min<br />Process Time={data.pt} min<br />Activity Ratio={data.pt/data.lt *100}%</p> */}
                <label style={{ width: '95%', position: 'absolute', left: '0px', border: 'groove', bottom: '20px' ,borderColor:'#027ef8'}}>PT={data.pt}min</label>
                <br />
                <label style={{ width: '95%', position: 'absolute', left: '0px', border: 'groove', bottom: '0px',borderColor:'#027ef8' }}>Ratio={data.pt / (data.lt + data.pt) * 100}%</label>
                <label style={{ width: '95%', position: 'absolute', left: '0px', border: 'groove', bottom: '40px',borderColor:'#027ef8' }}>LT={data.lt}min</label>
            </div>
        </div>
        </ReactFlowProvider>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div style={{ width: "100%", minHeight: "98px", display: "flex", margin: "auto", height: "100%" }}>
            <Tooltip element={element} tooltip={
                <div style={{ display: "block" }}>
                    <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                    <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
                </div>} />
        </div>
        
    );
}

export default Process;