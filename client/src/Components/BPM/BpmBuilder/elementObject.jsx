import {
Inventory,
Kanban
} from '../Nodes'

const handleElements = (getType, position, getId, dataProperties, dataDelete) => {



    const inventory = {
        component: Inventory,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    }
    
    const kanban = {
        component: Kanban,
        type: getType,
        selected: false,
        position,
        width:100,
        height:100,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    }

   



    const Components = {
       inventory:inventory,
       kanban:kanban
    }

    return Components[getType]

}

export default handleElements;