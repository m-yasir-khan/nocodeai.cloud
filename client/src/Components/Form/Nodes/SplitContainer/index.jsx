import {useState} from 'react';
import './style.css';
import Tooltip from '../../Tooltip';
import InputText from '../InputText';
import Label from '../Label';
import Checkbox from '../Checkbox'
import './style.css';
import RadioButton from '../RadioButton';
import Button from '../Button';
import Spacer from '../Spacer';
import Dropdown from '../Dropdown';
import TextArea from '../TextArea';
import UploadImage from '../Image';
import HTML from '../HTML';
import { constants } from '../../../../Utils/constants'
import { Resizable } from "re-resizable";
import {flagBottom, flagTop, flagLeft, flagRight} from '../nodesFlag';
import ResizeHandle from "../resizeHandle";
import {
    copyNode,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes
} from '../../FunctionalData';

function SplitContainer(props) {
    let data = props?.data;
    data.type = "splitcontainer";

    const [flag, setFlag] = useState(false);
    const [dimension, setDimension] = useState();

    const onClickSetting = (event) => {
        data?.properties(event, data, props?.setNodeProperty, props?.setPropertyVisible);
    }

    const onClickDelete = (event) => {
        data?.delete(event, data, props?.elements, props?.setElements);
    }

    const handleResizeStart = (e, direction) => {
        if (
            // direction !== "bottomLeft" &&
            direction !== "topLeft" &&
            direction !== "top" &&
            direction !== "left"
        ) {
            e.stopPropagation();
        }
        setDimension({ width: e.clientX, height: e.clientY })
    };

    const handleStyles = {
        top: flag
            ? flagTop
            : "",
        left: flag
            ? flagLeft
            : "",
        bottom: flag && flagBottom,
        right: flag
            ? flagRight
            : ""
    }

    const handleComponent = {
        topRight: flag ? <ResizeHandle /> : "",
        topLeft: flag ? <ResizeHandle /> : "",
        bottomLeft: flag ? <ResizeHandle /> : "",
        bottomRight: flag ? <ResizeHandle /> : ""
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

    let width = "100%";
    let columns = [];
    let i = 1;

    if (data.columns == 2) {
        width = "42%"
        while (i <= 2) {
            columns.push(
                <div onDrop={onDrop} onDragOver={onDragOver} key={i} style={{ float: "left", width: width, border: "1px solid #dedede", padding: "30px", backgroundColor: "white" }}>
                    {data?.nodes?.map(element => {
                        if (element.type) {
                            if (element.type == "inputfield") {
                                return <InputText properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "splitcontainer") {
                                return <SplitContainer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "label") {
                                return <Label properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "checkbox") {
                                return <Checkbox properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "button") {
                                return <Button properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "radiobutton") {
                                return <RadioButton properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "spacer") {
                                return <Spacer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "dropdown") {
                                return <Dropdown properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "textarea") {
                                return <TextArea properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "uploadimage") {
                                return <UploadImage properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "html") {
                                return <HTML properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                        }
                    })}
                </div>
            )
            i += 1
        }
    }
    if (data.columns == 3) {
        width = "25%"
        while (i <= 3) {
            columns.push(
                <div onDrop={onDrop} onDragOver={onDragOver} key={i} style={{ float: "left", width: width, border: "1px solid #dedede", padding: "30px", backgroundColor: "white" }}>
                    {data?.nodes?.map(element => {
                        if (element.type) {
                            if (element.type == "inputfield") {
                                return <InputText properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "splitcontainer") {
                                return <SplitContainer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "label") {
                                return <Label properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "checkbox") {
                                return <Checkbox properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "button") {
                                return <Button properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "radiobutton") {
                                return <RadioButton properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "spacer") {
                                return <Spacer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "dropdown") {
                                return <Dropdown properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "textarea") {
                                return <TextArea properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "uploadimage") {
                                return <UploadImage properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "html") {
                                return <HTML properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                        }
                    })}
                </div>
            )
            i += 1
        }
    }
    if (data.columns == 4) {
        width = "17%"
        while (i <= 4) {
            columns.push(
                <div onDrop={onDrop} onDragOver={onDragOver} key={i} style={{ float: "left", width: width, border: "1px solid #dedede", padding: "30px", backgroundColor: "white" }}>
                    {data?.nodes?.map(element => {
                        if (element.type) {
                            if (element.type == "inputfield") {
                                return <InputText properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "splitcontainer") {
                                return <SplitContainer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "label") {
                                return <Label properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "checkbox") {
                                return <Checkbox properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "button") {
                                return <Button properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "radiobutton") {
                                return <RadioButton properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "spacer") {
                                return <Spacer properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "dropdown") {
                                return <Dropdown properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "textarea") {
                                return <TextArea properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "uploadimage") {
                                return <UploadImage properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                            if (element.type == "html") {
                                return <HTML properties={element.properties} delete={element.delete} key={element.id} data={element} />
                            }
                        }
                    })}
                </div>
            )
            i += 1
        }
    }

    let element = (
        <Resizable
            style={{ textAlign: "center" }}
            defaultSize={{ width: data?.width, height: data?.height }}
            onResizeStart={handleResizeStart}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            handleStyles={handleStyles}
            handleComponent={handleComponent}
            resizeRatio={1}
        >
            <div className='split-node'>
                <div className='row'>
                    {columns.map(cols => cols)}
                </div>
            </div>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div onClick={(event) => props?.handleSelectNode(event, data?.id)} className="inputtext">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default SplitContainer;

