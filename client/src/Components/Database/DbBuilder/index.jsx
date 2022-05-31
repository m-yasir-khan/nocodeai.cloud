import React, { useState } from "react";
import "../style.css";
import Base from "../Base";
import Sidebar from "../Sidebar";
import Properties from "../properties";
import handleElements from "./elementsObject";

const initialElements = {
  formName: "Form Name",
  nodes: []
}
let id = 2;
const getId = () => { id += 1; return `cont_${id}` };
const getOptId = () => { id += 1; return `opt_${id}` };


export default function DatabaseComp() {
  const [elements, setElements] = useState(initialElements);
  const [nodeProperty, setNodeProperty] = useState(null);
  const [propertyVisible, setPropertyVisible] = useState(false);
  const [copiedNode, setCopiedNode] = useState(null);
  const [splitElements, setSplitElements] = useState([]);

  const onPaneClick = () => {
    setPropertyVisible(false);
  }

  const dataProperties = (node) => {
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

  let keysPressed = {};
  const copyNode = (event) => {
    event.preventDefault();
    keysPressed[event.key] = true;
    if (keysPressed['Control'] && event.key === 'c') {
      if (nodeProperty.data.label != "") {
        setCopiedNode({
          id: `node${nodeProperty.position.x}${nodeProperty.position.y}${getId()}`,
          type: nodeProperty.type,
          position: { x: (nodeProperty.position.x + 10), y: (nodeProperty.position.y + 20) },
          data: nodeProperty.data
        });
      }
    }
    if (keysPressed['Control'] && event.key === 'v') {
      console.log("pasted");
      setElements((es) => es.concat(copiedNode));
    }
  }

  const removeCopiedNode = (event) => {
    event.preventDefault();
    delete keysPressed[event.key];
    getId();
  }

  const handleSelectImage = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          image: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const checkboxQuestion = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          question: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const addCheckbox = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      console.log(data)
      if (node.id === id) {
        node = {
          ...node,
          options: data
        };
      }
      return node;
    })

    console.log(nodes)

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }


  const handleChangeName = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          label: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleChangeLink = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          link: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleCodeChange = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          code: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const changeSpacing = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          height: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const labelAlignment = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          align: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const labelFontWeight = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          fontWeight: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleImageWidth = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          width: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleImageHeight = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          height: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const labelTextTransform = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          textTransform: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleAlertMessage = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          message: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const handleAlertType = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          severity: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const labelSize = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          size: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const changeFormName = (data) => {
    setElements(es => ({
      ...es,
      formName: data
    }));
  }

  const onSelectChange = (data, id) => {
    console.log("Selected Option: ", data)
  }

  const onSelectColumns = (data, id) => {
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        node = {
          ...node,
          columns: data,
        };
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const addDropdownOpt = (data, id) => {
    let option = {
      id: getOptId(),
      value: data
    }
    const arr = [];
    elements.nodes.map((node) => node.options.map(opt => { arr.push(opt) }))
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        arr.push(option)
        node = {
          ...node,
          options: arr
        };
        setNodeProperty(node);
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const remDropdownOpt = (id, optId) => {
    const arr = [];
    nodeProperty.options.map(opt => { arr.push(opt) })
    console.log(arr);
    let nodes = elements.nodes.map((node) => {
      if (node.id === id) {
        arr.map(opt => {
          if (opt.id === optId) {
            const index = node.options.indexOf(opt);
            console.log(index);
            if (index > -1) {
              node.options.splice(index, 1);
            }
          }
        })
        node = {
          ...node,
          options: node.options
        };
        setNodeProperty(node);
      }
      return node;
    })

    setElements(es => ({
      ...es,
      nodes: nodes
    }));
  }

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const splitOnDrag = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const splitOnDrop = (event) => {
    const type = event.dataTransfer.getData("field");
    let getData = {};
    if (type == 'inputfield') {
      getData = {
        type,
        properties: dataProperties,
        delete: dataDelete,
        id: (getId()),
        label: "Default",
        name: "Default",
        inputTypes: [{ id: "0", type: "Text" }, { id: "1", type: "Integer" }, { id: "2", type: "Float" }, { id: "3", type: "Date" }, { id: "4", type: "Time" }, { id: "5", type: "Email" }, { id: "6", type: "Currency" }, { id: "7", type: "Signature" }, { id: "8", type: "URL" }, { id: "9", type: "Calculated Field" }, { id: "10", type: "Password" }, { id: "11", type: "Phone Number" }, { id: "12", type: "Keys" }, { id: "13", type: "Address" }]

      }
      let nodes = splitElements.concat(getData);
      setSplitElements(es => ({
        ...es,
        nodes: nodes
      }))
    }
  }

  const onDrop = (event) => {
    const type = event.dataTransfer.getData("field");
    const position = { x: event.screenX-200, y: event.screenY-200 }
    const data = elements.nodes;
    let getData = {};

    type ? getData = handleElements(type, position, getId(), dataProperties, dataDelete) : console.log("Nothing")
    
    data.push(getData);
    setElements(es => ({
      ...es,
      nodes: data
    }))
  }

  return (
    <div className="formbuilder">
      <Sidebar />
      <Base
        onPaneClick={onPaneClick}
        onDragOver={onDragOver}
        onDrop={onDrop}
        elements={elements}
        changeFormName={changeFormName}

      />
      <Properties
        onSelectChange={onSelectChange}
        onSelectColumns={onSelectColumns}
        changeName={handleChangeName}
        changeFormName={changeFormName}
        onChangeSize={labelSize}
        onChangeAlignment={labelAlignment}
        changeFontWeight={labelFontWeight}
        changeTextTransform={labelTextTransform}
        changeCheckboxQuestion={checkboxQuestion}
        addCheckbox={addCheckbox}
        changeSpacing={changeSpacing}
        onChangeCode={handleCodeChange}
        selectImage={handleSelectImage}
        imageHeight={handleImageHeight}
        imageWidth={handleImageWidth}
        changeLink={handleChangeLink}
        alertMessage={handleAlertMessage}
        alertType={handleAlertType}
        nodeDetail={nodeProperty}
        // For Dropdown
        addDropdownOpt={addDropdownOpt}
        remDropdownOpt={remDropdownOpt}
        visible={propertyVisible} />
    </div>
  );
}
