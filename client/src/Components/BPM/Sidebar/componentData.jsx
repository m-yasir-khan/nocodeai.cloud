import {
    Input, 
    DateTime, 
    ValueStream, 
    Feedback, 
    Surfaces, 
    Navigation, 
    Utils
} from './Elements';
import {constants} from '../../../Utils/constants'

let componentData = [
  {
    id: "1", open: true, name: "Input", Component: Input, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "2", open: false, name: "Basic Shapes", Component: DateTime, Icon: constants.MdKeyboardArrowUp
  },
  {
    id: "3", open: false, name: "Value Stream Mapping", Component: ValueStream, Icon: constants.MdKeyboardArrowUp
  }
]

export {componentData}