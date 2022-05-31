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
import DropDownNode from "./nodes/DropDownNode";
import Button from "./nodes/ButtonNode";
import ContainerNode from "./nodes/ContainerNode";
import HeadingNode from "./nodes/HeadingNode";
import Sidebar from "./sidebar";
import Properties from "./properties";
import CheckboxNode from "./nodes/CheckboxNode"
import RadioButtonNode from "./nodes/RadioButtonNode"


const initialElements = [];
let id = 0;
const getId = () => `node_${id++}`;

export default function FormBuilder() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [nodeProperty, setNodeProperty] = useState({ data: { label: "" } });
  const [propertyVisible, setPropertyVisible] = useState(false);
  const [copiedNode, setCopiedNode] = useState(null);
  const nodeTypes = { inputfield: InputField, dropdown: DropDownNode, button: Button, container: ContainerNode, heading: HeadingNode, checkbox: CheckboxNode, radiobutton: RadioButtonNode };
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

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
    console.log("Clicked on Panel");
  }

  const onNodeClick = (event, node) => {
    event.preventDefault();
    setNodeProperty(node);
    setPropertyVisible(true);
    console.log(node);
  }

  let keysPressed = {};
  const copyNode = (event) => {
    event.preventDefault();
    keysPressed[event.key] = true;
    if (keysPressed['Control'] && event.key === 'c') {
      if (nodeProperty.data.label != "") {
        console.log("copied");
        setCopiedNode({
          id: getId(),
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


  const handleFontSize = (data, id) => {
    console.log({ size: data, id: id })
  }

  const handleLabelSize = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            size: data,
          };
        }

        return node;
      })
    );

  }

  const handleHeight = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            height: data,
          };
        }

        return node;
      })
    );

  }

  const handleWidth = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            width: data,
          };
        }

        return node;
      })
    );
  }

  const handleChangeName = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            name: data,
          };
        }

        return node;
      })
    );

  }

  const handlePaddingTop = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            paddingTop: data,
          };
        }

        return node;
      })
    );

  }

  const handlePaddingDown = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            paddingDown: data,
          };
        }

        return node;
      })
    );

  }

  const handlePaddingLeft = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            paddingLeft: data,
          };
        }

        return node;
      })
    );

  }

  const handlePaddingRight = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            paddingDown: data,
          };
        }

        return node;
      })
    );

  }

  const handleCallback = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            name: data,
          };
        }

        return node;
      })
    );

  }

  const handleTextColor = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            textColor: data,
          };
        }

        return node;
      })
    );

  }

  const handleBackgroundColor = (data, id) => {
    console.log({ label: data, id: id })

    setElements((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            backgroundColor: data,
          };
        }

        return node;
      })
    );

  }

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: {
        label: "Default",
        name: "Default",
        size: "12px",
        height: "",
        width: "",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "6px",
        paddingRight: "6px",
        textColor: "",
        backgroundColor: ""
      }
    };
    setElements((es) => es.concat(newNode));

  };

  const BASE_BG_GAP = 32;
  const BASE_BG_STROKE = 1;

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            nodeTypes={nodeTypes}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onPaneClick={onPaneClick}
            onElementClick={onNodeClick}
            tabIndex="0"
            onKeyDown={copyNode}
            onKeyUp={removeCopiedNode}
            style={{ outline: "none" }}
          >
            <Background
              variant={BackgroundVariant.Lines}
              gap={BASE_BG_GAP / 1}
              size={BASE_BG_STROKE / 1}
            />
            <Controls />
          </ReactFlow>
        </div>
        <Properties
          parentCallback={handleCallback}
          sizeChange={handleFontSize}
          changeName={handleChangeName}
          changeLabelSize={handleLabelSize}
          changeHeight={handleHeight}
          changeWidth={handleWidth}
          changePaddingTop={handlePaddingTop}
          changePaddingDown={handlePaddingDown}
          changePaddingLeft={handlePaddingLeft}
          changePaddingRight={handlePaddingRight}
          changeTextColor={handleTextColor}
          changeBackgroundColor={handleBackgroundColor}
          nodeDetail={nodeProperty}
          visible={propertyVisible} />
      </ReactFlowProvider>
    </div>
  );
}
