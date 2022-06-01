import {
    Input, 
    DateTime, 
    DataDisplay, 
    Feedback, 
    Surfaces, 
    Navigation, 
    Utils,
    Form
} from './Elements';
import {constants} from '../../../Utils/constants'

let componentData = [
  {
    id: "0", open: true, name: "Form", Component: Form, Icon: constants.MdKeyboardArrowUp
  },
  {
    id: "1", open: false, name: "Input", Component: Input, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "2", open: false, name: "Date & Time", Component: DateTime, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "3", open: false, name: "Data Display", Component: DataDisplay, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "4", open: false, name: "Feedback", Component: Feedback, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "5", open: false, name: "Surfaces", Component: Surfaces, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "6", open: false, name: "Navigation", Component: Navigation, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "7", open: false, name: "Utils", Component: Utils, Icon: constants.MdKeyboardArrowDown
  }
]

export {componentData}