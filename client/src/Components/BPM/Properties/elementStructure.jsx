import {
    InputText,
    HTML
} from './Columns'

const handleElements = (getType) => {
    const inputField = InputText


    const html = HTML 


    const Components = {
        inputfield: inputField,
        html,
    }

    return Components[getType]

}

export default handleElements;