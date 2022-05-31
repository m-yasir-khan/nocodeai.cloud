import {
Software,
ResidentialConstruction,
CommercialConstruction
}
from "./templates"

import {constants} from '../../../Utils/constants'

let templateData = [
  {
    id: "software", open: true, name: "software", Component: Software
  },
  {
    id: "commercialConstruction", open: false, name: "residentialConstruction", Component: ResidentialConstruction
  },
  {
    id: "residentialConstruction", open: false, name: "commercialConstruction", Component: CommercialConstruction
  }
]

export {templateData}