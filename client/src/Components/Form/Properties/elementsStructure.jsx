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
} from './Columns'

const handleElements = (getType) => {
    const inputField = InputText

    const datePicker = DatePicker

    const timePicker = TimePicker 

    const rating = Rating 

    const label = Label 

    const link = Link 

    const tabs = Tabs 

    const rtf = RTF 

    const breadcrumbs = Breadcrumbs 

    const switchProp = Switch 

    const accordion = Accordion 

    const alert = Alert 

    const dropdown = Dropdown 

    const button = Button 

    const modal = Modal 

    const spacer = Spacer 

    const checkbox = Checkbox 

    const transferList = TransferList 

    const toggleButton = ToggleButton 

    const avatar = Avatar 

    const badge = Badge 

    const progress = Progress 

    const radioButton = RadioButton 

    const splitContainer = SplitContainer 

    const container = Container 

    const swimlane = Swimlane 

    const textArea = TextArea 

    const uploadImage = UploadImage 

    const imageList = ImageList 

    const html = HTML 


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