import React, { useState } from 'react';
import { constants } from '../../Utils/constants';
import ColorPicker from "material-ui-color-picker";

export default (props) => {
    let nd = props?.nodeDetail;
    let visibility = props?.visible;

    const [inputFieldLabel, setInputFieldLabel] = useState(nd?.label)
    const [spacing, setSpacing] = useState(nd?.height)
    const [checkboxOption, setCheckboxOptions] = useState([nd?.options])
    const [checkboxQuestion, setCheckboxQuestion] = useState(nd?.question)
    const [code, setCode] = useState(nd?.code)
    const [image, setImage] = useState(nd?.image)

    const handleName = (event) => {
        props?.changeName(event.target.value, nd?.id);
        setInputFieldLabel(event.target.value);
        event.preventDefault();
    }

    const handleLink = (event) => {
        props?.changeLink(event.target.value, nd?.id);
        event.preventDefault();
    }

    const alertType = (event) => {
        props?.alertType(event.target.value, nd?.id);
        event.preventDefault();
    }

    const alertMessage = (event) => {
        props?.alertMessage(event.target.value, nd?.id);
        event.preventDefault();
    }

    const changeSpacing = (event) => {
        props?.changeSpacing(event.target.value, nd?.id);
        setSpacing(event.target.value);
        event.preventDefault();
    }

    const handleSelectChange = (event) => {
        props?.onSelectChange(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleColumns = (event) => {
        props?.onSelectColumns(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleAlignment = (event) => {
        props?.onChangeAlignment(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleSize = (event) => {
        props?.onChangeSize(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleTextTransform = (event) => {
        props?.changeTextTransform(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleFontWeight = (event) => {
        props?.changeFontWeight(event.target.value, nd?.id);
        event.preventDefault();
    }

    const handleCheckboxQuestion = (event) => {
        props?.changeCheckboxQuestion(event.target.value, nd?.id);
        setCheckboxQuestion(event.target.value);
        event.preventDefault();
    }

    const codeChange = (event) => {
        props?.onChangeCode(event.target.value, nd?.id);
        setCode(event.target.value);
        event.preventDefault();
    }

    const addNewCheckbox = (event) => {
        let checkbox = document.getElementById("addbox").value
        setCheckboxOptions(checkboxOption.concat(checkbox))
        console.log(checkboxOption)
        props?.addCheckbox(checkbox);
    }

    const handleSelectImage = (event) => {
        let image = event.target.files[0];
        let objectURL = URL.createObjectURL(image);
        props?.selectImage(objectURL, nd?.id)
    }

    const imageHeight = (event) => {
        props?.imageHeight(event.target.value, nd?.id)
    }

    const imageWidth = (event) => {
        props?.imageWidth(event.target.value, nd?.id)
    }

    if (nd?.type == 'select') {
        return (
            <div className='properties'>
                <span className='properties-header'>Properties</span>
                <div visibility={visibility.toString()} className='properties-components'>
                    <h3 style={{ textAlign: "center" }}>Input Field</h3>
                    <span>Name:</span>
                    <input value={inputFieldLabel} onChange={handleName} type="text" />
                    <span>Type:</span>
                    <select onChange={handleSelectChange}>
                        {nd?.inputTypes.map((it) => {
                            return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                        })}
                    </select>
                </div>
            </div>
        );
    }
    if (nd?.type == 'update') {
        return (
            <div className='properties'>
                <span className='properties-header'>Properties</span>
                <div visibility={visibility.toString()} className='properties-components'>
                    <h3 style={{ textAlign: "center" }}>Input Field</h3>
                    <span>Name:</span>
                    <input value={inputFieldLabel} onChange={handleName} type="text" />
                    <span>Type:</span>
                    <select onChange={handleSelectChange}>
                        {nd?.inputTypes.map((it) => {
                            return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                        })}
                    </select>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className='properties'>
                <span className='properties-header'>Properties</span>
            </div>
        );
    }
};