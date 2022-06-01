import {
    InputText,
    HTML,
    Kanban
} from '../Nodes'

const handleElements = (getType, position, getId, dataProperties, dataDelete) => {
    const inputField = {
        component: InputText,
        type: getType,
        selected: false,
        position,
        width: 200,
        height: 40,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
    }

 

    const html = {
        component: HTML,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        code: "<p>Write HTML code here!</p>"

    }
    const kanban = {
        component: Kanban,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }


    const Components = {
        inputfield: inputField,
        html,
        kanban
    }

    return Components[getType]

}

export default handleElements;