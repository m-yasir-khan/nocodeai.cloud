
import {
    Mail,
    Phone,
    AutomatedInformationFlow,
    ManualInformationFlow,
    Worker,
    ItSystem,
    DataBlock,
    ProcessBlock,
    OutsideOrganization,
    InputText,
    HTML,
    Kanban,
    MaterialReciept, 
    Withdrawal, KaizenBurst,
    TruckMovement, GoSee, ControlledFifo, Inventory, PushSystem, Inbox, FaxMachine
} from "../Nodes";


const handleElements = (
    getType,
    position,
    getId,
    dataProperties,
    dataDelete
) => {
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
        inputTypes: [
            { id: "0", type: "Text" },
            { id: "1", type: "Integer" },
            { id: "2", type: "Float" },
            { id: "3", type: "Date" },
            { id: "4", type: "Time" },
            { id: "5", type: "Email" },
            { id: "6", type: "Currency" },
            { id: "7", type: "Signature" },
            { id: "8", type: "URL" },
            { id: "9", type: "Calculated Field" },
            { id: "10", type: "Password" },
            { id: "11", type: "Phone Number" },
            { id: "12", type: "Keys" },
            { id: "13", type: "Address" },
        ],
    };

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
        code: "<p>Write HTML code here!</p>",
    };
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
    };
    const materialReciept = {
        component: MaterialReciept,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const withdrawal = {
        component: Withdrawal,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const kaizenBurst = {
        component: KaizenBurst,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const truckMovement = {
        component: TruckMovement,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const goSee = {
        component: GoSee,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const controlledFifo = {
        component: ControlledFifo,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
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
    };
    const pushSystem = {
        component: PushSystem,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const inbox = {
        component: Inbox,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const faxMachine = {
        component: FaxMachine,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    };
    const mail = {
        component: Mail,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const phone = {
        component: Phone,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
      const automatedInformationFlow= {
        component: AutomatedInformationFlow,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const manualInformationFlow   = {
        component: ManualInformationFlow,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const worker = {
        component: Worker,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const itSystem = {
        component:ItSystem,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const dataBlock = {
        component: DataBlock,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const processBlock = {
        component:ProcessBlock,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",

    }
    const outsideOrganization = {
        component: OutsideOrganization,
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
        kanban,
        materialReciept,
        withdrawal,
        kaizenBurst,
        truckMovement,
        goSee,
        controlledFifo,
        inventory,
        pushSystem,
        inbox,
        faxMachine,
        outsideOrganization,
        processBlock,
        dataBlock,
        itSystem,
        worker,
        manualInformationFlow,
        automatedInformationFlow,
        phone,
        mail
    };

    return Components[getType];
};



export default handleElements;
