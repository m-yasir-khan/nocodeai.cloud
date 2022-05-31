import React, { useState } from "react";
import "./style.css";
import Base from "./Base";
import Sidebar from "./Sidebar";
import Properties from "./Properties";

const initialElements = {
  formName: "Form Name",
  nodes: []
}

export default function FormBuilder() {
  const [elements, setElements] = useState(initialElements);
  const [nodeProperty, setNodeProperty] = useState();
  const [propertyVisible, setPropertyVisible] = useState(false);
  const [copiedNodes, setCopiedNodes] = useState([]);
  const [splitElements, setSplitElements] = useState([]);

  return (
    <div className="formbuilder">
      <Sidebar />
      <Base
        elements={elements}
        setNodeProperty={setNodeProperty}
        setPropertyVisible={setPropertyVisible}
        setElements={setElements}
        copiedNodes={copiedNodes}
        setCopiedNodes={setCopiedNodes}
      />
      <Properties
        elements={elements}
        setElements={setElements}
        setNodeProperty={setNodeProperty}
        nodeDetail={nodeProperty}
        visible={propertyVisible} />
    </div>
  );
}