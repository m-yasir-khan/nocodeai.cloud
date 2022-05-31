import handleElements from "./elementsObject";

let id = 0;
const getId = () => { id += 1; return `node_${id}` };

// Change Form Name
const changeFormName = (data, setElements) => {
    setElements(es => ({
        ...es,
        formName: data
    }));
}

// Open Properties Panel For Selected Node
const dataProperties = (event, node, setNodeProperty, setPropertyVisible) => {
    event.stopPropagation();
    setNodeProperty(node);
    setPropertyVisible(true);
}

// Removes Selected Node
const dataDelete = (event, node, elements, setElements) => {
    event.stopPropagation();
    const data = elements?.nodes;
    // const index = elements.nodes.indexOf(node);
    data?.map((v, i) => {
        if (node.id == v.id) {
            data.splice(i, 1);
        }
    })

    setElements(es => ({
        ...es,
        nodes: data
    }));
}

// Copy Node
let keysPressed = {};
const copyNode = (event, elements, setElements, copiedNodes, setCopiedNodes) => {
    event.preventDefault();
    keysPressed[event.key] = true;
    if (keysPressed['Control'] && event.key === 'c') {
        let cNodes = [];
        elements?.nodes?.map((el) => {
            if (el.selected == true) {
                el = {
                    ...el,
                    position: { x: (el.position.x + 10), y: (el.position.y + 20) },
                    id: `copied_node${getId()}`
                }
                cNodes.push(el)
            }
        })
        setCopiedNodes(cNodes);
    }

    if (keysPressed['Control'] && event.key === 'v') {
        let newElem = [];
        if (copiedNodes != []) {

            newElem = elements?.nodes?.concat(copiedNodes);
        }

        setElements(es => ({
            ...es,
            nodes: newElem
        }));
    }
}

// Select multiple nodes on click
const selectMultipleNodes = (event, id, elements, setElements) => {
    event.stopPropagation();
    let nodes = elements?.nodes?.map((node) => {
        if (node.id === id) {
            node = {
                ...node,
                selected: !node.selected,
            };
        }
        return node;
    })

    setElements(es => ({
        ...es,
        nodes: nodes
    }));
}

// Select nodes when press ctrl and drag the base surface
const handleMultipleSelectDrag = (ids, elements, setElements) => {
    let nodes = elements?.nodes?.map((node) => {
        Array.from(ids).forEach((id) => {
            if (node.id === id) {
                node = {
                    ...node,
                    selected: true,
                };
            }
        });

        return node;
    });
    setElements(es => ({
        ...es,
        nodes: nodes
    }));
}

// Select a single node on click
const handleSelectNode = (event, id, elements, setElements) => {
    event.stopPropagation();
    let nodes = elements.nodes.map((node) => {
        if (node.id === id) {
            node = {
                ...node,
                selected: true,
            };
        }
        if (node.id !== id) {
            node = {
                ...node,
                selected: false,
            };
        }
        return node;
    })

    setElements(es => ({
        ...es,
        nodes: nodes
    }));
}

// Updates position and dimension of the nodes
const handleUpdateNode = (event, id, position, width, height, elements, setElements) => {
    event.stopPropagation();
    let nodes = elements?.nodes?.map((node) => {
        if (node.id === id) {
            node = {
                ...node,
                position,
                width,
                height
            };
        }
        return node;
    })

    setElements(es => ({
        ...es,
        nodes: nodes
    }));
}

// Deselect Nodes
const handleDeselectNodes = (event, elements, setElements, setNodeProperty, setPropertyVisible) => {
    let nodes = elements?.nodes?.map((node) => {
        node = {
            ...node,
            selected: false,
        };

        return node;
    })

    setElements(es => ({
        ...es,
        nodes: nodes
    }));
    setNodeProperty(null);
    setPropertyVisible(false);
}

const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
};

// Drops element on base component
const onDrop = (event, elements, setElements) => {
    const type = event?.dataTransfer?.getData("field");
    const position = { x: event?.clientX - 300, y: event?.clientY - 145 }
    const data = elements?.nodes;
    let getData = {};

    type ? getData = handleElements(type, position, getId(), dataProperties, dataDelete) : console.log("Nothing")

    data.push(getData);
    setElements(es => ({
        ...es,
        nodes: data
    }))
    // console.log(data,"drop")
}

export {
    changeFormName,
    dataProperties,
    dataDelete,
    copyNode,
    handleDeselectNodes,
    handleMultipleSelectDrag,
    handleSelectNode,
    handleUpdateNode,
    selectMultipleNodes,
    onDragOver,
    onDrop
}