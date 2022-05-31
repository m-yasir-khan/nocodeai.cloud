import {
    Software, 
    Construction, 
    Marketing,
    Basic

} from './Elements';
import {constants} from '../../../Utils/constants'

let componentData = [
  {
    id: "1", open: true, name: "Software", Component: Software, Icon: constants.MdKeyboardArrowDown
  },
  {
    id: "2", open: false, name: "Construction", Component: Construction, Icon: constants.MdKeyboardArrowUp
  },
  {
    id: "3", open: false, name: "Marketing", Component: Marketing, Icon: constants.MdKeyboardArrowUp
  },
  {
    id: "4", open: false, name: "Basic Project", Component: Basic, Icon: constants.MdKeyboardArrowUp
  }
]

export {componentData}