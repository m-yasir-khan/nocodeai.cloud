
import React, { useState, useRef, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  BackgroundVariant
} from "react-flow-renderer";
import "./style.css";
import InputField from "./nodes/InputField";
import { MyClass } from "./ContainerDrop.mjs";
import DropDownNode from "./nodes/DropDownNode";
import Button from "./nodes/ButtonNode";
import {ContainerNode ,Cdrop}from "./nodes/ContainerNode";
import HeadingNode from "./nodes/HeadingNode";
import Sidebar from "./Sidebar";
import Properties from "./Properties";
import CheckboxNode from "./nodes/CheckboxNode"
import RadioButtonNode from "./nodes/RadioButtonNode"
import StartLabel from "./nodes/StartLabel"
import EndLabel from "./nodes/EndLabel"
import ConditionNode from "./nodes/ConditionNode"
import DatabaseNode from "./nodes/DatabseNode"
import ProcessNode from "./nodes/ProcessNode"
import IONode from "./nodes/IONode"
import AndNode from "./nodes/AndNode"
import OrNode from "./nodes/OrNode"
import InputDataNode from "./nodes/InputDataNode"
import OutputDataNode from "./nodes/OutputDataNode"
import EmailNode from "./nodes/EmailNode";
import PublishNode from "./nodes/PublishNode";
import SubscribeNode from "./nodes/SubscribeNode";
import OutsideOrganization from "./nodes/OutsideOrganization";
import Base from "./Base";

const initialElements = {
  formName: "BPM",
  nodes: []
};
let id = 0;
const getId = () => `node_${id++}`;



export default function UsecaseBuilder() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [nodeProperty, setNodeProperty] = useState({ data: { label: "" } });
  const [propertyVisible, setPropertyVisible] = useState(false);
  const [copiedNode, setCopiedNode] = useState(null);

const edgeStyle = {color:`red`};
  // const onConnect = (params) =>
  // { 
  //   params.type="smoothstep";
  //   params.style = {stroke:'blue',strokeWidth:'1px'};
  //   //params.markerEnd = params.markerEnd.ArrowClosed;
  //  // console.log(params,"==> params");
  //   params.arrowHeadType = `arrowclosed`;
  //   setElements((els) =>
  //    addEdge(params, els));
  // };
  
  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onPaneClick = (event) => {
    event.preventDefault();
    setPropertyVisible(false);
    setNodeProperty({ data: { label: "" } })
    // console.log("Clicked on Panel");
  }

  const onNodeClick = (event, node) => {
    event.preventDefault();
    setNodeProperty(node);
    setPropertyVisible(true);
    // console.log(node);
  }

  let keysPressed = {};
  // const copyNode = (event) => {
  //   event.preventDefault();
  //   keysPressed[event.key] = true;
  //   if (keysPressed['Control'] && event.key === 'c') {
  //     if (nodeProperty.data.label != "") {
  //       // console.log("copied");
  //       setCopiedNode({
  //         id: getId(),
  //         type: nodeProperty.type,
  //         position: { x: (nodeProperty.position.x + 10), y: (nodeProperty.position.y + 20) },
  //         data: nodeProperty.data
  //       });
  //     }
  //   }
  //   if (keysPressed['Control'] && event.key === 'v') {
  //     // console.log("pasted");
  //     setElements((es) => es.concat(copiedNode));
  //   }
  // }

  const removeCopiedNode = (event) => {
    event.preventDefault();
    delete keysPressed[event.key];
    getId();
  }


  // const handleFontSize = (data, id) => {
  //   console.log({ size: data, id: id })
  // }

  // const handleLabelSize = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           size: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }

  // const handleHeight = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           height: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }

  // const handleWidth = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           width: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );
  // }

  // const handleChangeName = (data, id) => {
  //   // console.log({ label: data, id: id })

  //   let nodes = elements.nodes.map((node) => {
  //     if (node.id === id) {
  //       node = {
  //         ...node,
  //         label: data,
  //       };
  //     }
  //     return node;
  //   })

  //   setElements(es => ({
  //     ...es,
  //     nodes: nodes
  //   }));

  // }
  const changePropertyParameter = (data, id,parameterName) => 
  {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          [parameterName]: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }
  // const handleChangeDescription = (data, id) => {
  //   // console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           description: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }
  // const handleProcessTime = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           pt: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // } 
  // const handleLeadTime = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           lt: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }

 
 

  // const handleTextColor = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           textColor: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }

  // const handleBackgroundColor = (data, id) => {
  //   console.log({ label: data, id: id })

  //   setElements((nds) =>
  //     nds.map((node) => {
  //       if (node.id === id) {
  //         node.data = {
  //           ...node.data,
  //           backgroundColor: data,
  //         };
  //       }

  //       return node;
  //     })
  //   );

  // }

  const dataProperties = (node) => {
    console.log("data properties",node);
    setNodeProperty(node);
    setPropertyVisible(true);
  }

  const dataDelete = (node) => {
    const data = elements.nodes;
    const index = elements.nodes.indexOf(node);
    if (index > -1) {
      data.splice(index, 1);
    }
    setElements(es => ({
      ...es,
      nodes: data
    }));
  }

  const onDrop = (event) => 
  {
    const type = event.dataTransfer.getData("field");
    const position = { x: event.screenX-200, y: event.screenY-200 }
    const data = elements.nodes;
    let getData = {};
    if (type == 'processNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }
      console.log("get Data",getData);
    }
    else if (type == 'startLabel') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'endLabel') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'outsideOrganization') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'conditionNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'preparationNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'delayNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'connectorNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'loopLimitNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'mergeNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'swimlaneNode') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'html') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'label') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'outsideOrganization') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'processBlock') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'dataBlock') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'itSystem') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'worker') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'manualInformationFlow') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'automatedInformationFlow') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'phone') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'mail') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'faxMachine') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'inbox') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'pushSystem') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'inventory') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'controlledFifo') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'kanban') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'goSee') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'truckMovement') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'kaizenBurst') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'withdrawal') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'materialReciept') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'container') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'inputfield') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'dropdown') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'button') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'togglebutton') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'checkbox') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'radiobutton') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'image') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'textarea') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'html') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'rtf') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'switch') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'alert') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }
    else if (type == 'progress') {
      getData = {
        type,
        position,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]
      }

    }

    
    data.push(getData);

    setElements(es => ({
      ...es,
      nodes: data
    }))
  };



  const BASE_BG_GAP = 32;
  const BASE_BG_STROKE = 1;
  const [isDraggable, setIsDraggable] = useState(true);
  return (
    <div  className="dndflow">
        <Sidebar />
        <Base
        onPaneClick={onPaneClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
        elements={elements}

      />
        <Properties
          // sizeChange={handleFontSize}
          // changeName={handleChangeName}
          // changeDiscription = {handleChangeDescription}
          // changeLeadTime = {handleLeadTime}
          // changeProcessTime = {handleProcessTime}
          changeProperty = {changePropertyParameter}
          // changeLabelSize={handleLabelSize}
          // changeHeight={handleHeight}
          // changeWidth={handleWidth}
          // changeTextColor={handleTextColor}
          // changeBackgroundColor={handleBackgroundColor}
           nodeDetail={nodeProperty}
          // visible={propertyVisible} 
          /> 
    </div>
  );
}
