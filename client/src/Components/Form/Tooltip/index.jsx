import React from 'react';
import "./style.css";
import { constants } from '../../../Utils/constants'

export default function Tooltip(props) {
    let style = props?.tooltip;
    let tooltip = (<div style={{ display: "block" }}>
        <constants.AiOutlineSetting onClick={props?.onClickSetting} className="icon-style" />
    </div>)

    if (style) {
        tooltip = style;
    }
    return (
        <div className="tooltip">{props?.element}
            <span className="tooltiptext">{tooltip}</span>
        </div>
    )
}