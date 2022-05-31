import {
    InputText,
    SplitContainer,
    Container,
    Label,
    Checkbox,
    RadioButton,
    Button,
    Spacer,
    Dropdown,
    TextArea,
    UploadImage,
    HTML,
    Link,
    Tabs,
    Breadcrumbs,
    Switch,
    Accordion,
    Alert,
    RTF,
    Modal,
    Swimlane,
    DatePicker,
    TimePicker,
    Rating,
    TransferList,
    ToggleButton,
    Avatar,
    Badge,
    Progress,
    ImageList
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

    const datePicker = {
        component: DatePicker,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    }

    const timePicker = {
        component: TimePicker,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    }

    const rating = {
        component: Rating,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
    }

    const label = {
        component: Label,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        align: "left",
        bgColor: "#ffffff",
        color: "#333333",
        width: 100,
        height: 50
    }

    const link = {
        component: Link,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const tabs = {
        component: Tabs,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const rtf = {
        component: RTF,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const breadcrumbs = {
        component: Breadcrumbs,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const switchProp = {
        component: Switch,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const accordion = {
        component: Accordion,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        link: "#"
    }

    const alert = {
        component: Alert,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        message: "This is an error message!",
        label: "Default",
        severity: "error"
    }

    const dropdown = {
        component: Dropdown,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        options: [{ id: "1", value: "default" }]

    }

    const button = {
        component: Button,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        align: "left"
    }

    const modal = {
        component: Modal,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        size: "12px",
        label: "Default",
        align: "left"
    }

    const spacer = {
        component: Spacer,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        height: 12,
    }

    const checkbox = {
        component: Checkbox,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        question: "Write question here...",
        options: [{ id: "1", value: "default" }]
    }

    const transferList = {
        component: TransferList,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId
    }

    const toggleButton = {
        component: ToggleButton,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId
    }

    const avatar = {
        component: Avatar,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId
    }

    const badge = {
        component: Badge,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId
    }

    const progress = {
        component: Progress,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId
    }

    const radioButton = {
        component: RadioButton,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        question: "Write question here...",
        options: [{ id: "1", value: "default" }]
    }

    const splitContainer = {
        component: SplitContainer,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        columns: 2,
    }

    const container = {
        component: Container,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        width: 100,
        height: 100
    }

    const swimlane = {
        component: Swimlane,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
    }

    const textArea = {
        component: TextArea,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default"

    }

    const uploadImage = {
        component: UploadImage,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        height: 150,
        width: 150,
        image: "http://localhost:3000/imagealt.png"
    }

    const imageList = {
        component: ImageList,
        type: getType,
        selected: false,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: getId,
        label: "Default",
        name: "Default",
        height: 150,
        width: 150,
        image: "http://localhost:3000/imagealt.png"
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


    const Components = {
        inputfield: inputField,
        datepicker: datePicker,
        timepicker: timePicker,
        rating,
        label,
        link,
        tabs,
        rtf,
        breadcrumbs,
        switch: switchProp,
        accordion,
        alert,
        dropdown,
        button,
        modal,
        spacer,
        checkbox,
        togglebutton: toggleButton,
        transferlist: transferList,
        avatar,
        badge,
        progress,
        radiobutton: radioButton,
        splitcontainer: splitContainer,
        container,
        swimlane,
        textarea: textArea,
        image: uploadImage,
        imagelist: imageList,
        html,
    }

    return Components[getType]

}

export default handleElements;