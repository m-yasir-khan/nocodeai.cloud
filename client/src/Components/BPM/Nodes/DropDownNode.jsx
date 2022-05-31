import { Tooltip, Modal, Select } from 'antd';
// import { useCallback } from 'react';
import '../style.css';
// import { Rnd } from "react-rnd";
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useState } from 'react';

const iconStyle = {height: "15px", width: "20px", cursor: "pointer", color: "#fff"};
const iconContainer = {backgroundColor: "#333", margin: "0 4px", border: "1px solid #333", borderRadius: "4px"};

function InputField() {

    const [label, setLabel] = useState("Label");
    const [visible, setVisible] = useState(false);

    const editLabel = () => {
        let getLabel = document.getElementById("label").value;
        setLabel(getLabel)
        getLabel = ""
        setVisible(false)
    }

    const showModal = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const text = (
        <div style={{display: "flex", padding: "6px"}}>
            <div style={iconContainer}>
                <PencilAltIcon onClick={showModal} style={iconStyle} />
            </div>
            <div style={iconContainer}>
                <TrashIcon style={iconStyle} />
            </div>
        </div>
    );

    return (
        <div className="flow-label">
            <Modal visible={visible} onOk={editLabel} onCancel={handleCancel}>
                <div>
                    <label style={{ marginRight: "10px" }}>Edit Label:</label>
                    <input id="label" type="text" />
                </div>
            </Modal>
            <Tooltip color={"white"} placement="right" title={text}>
                <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                </Select>
            </Tooltip>
        </div>
    );
}

export default InputField;
