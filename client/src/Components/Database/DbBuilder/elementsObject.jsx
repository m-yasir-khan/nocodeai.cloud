import {
    Select,Update
} from '../Nodes'

const handleElements = (getType, position, getId, dataProperties, dataDelete) => {
    const select = {
        component: Select,
        type: getType,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
    }

    const update = {
        component: Update,
        type: getType,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
    }




    const Components = {
        select,
        update
    }

    return Components[getType]

}

export default handleElements;