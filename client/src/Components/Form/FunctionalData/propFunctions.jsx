let id = 0;
const getOptId = () => { id += 1; return `opt_${id}` };

const singleDataChange = (data, id, index, elements, setElements) => {
    let nodes = elements.nodes.map((node) => {
        if (node.id === id) {
            node = {
                ...node,
                [index]: data,
            };
        }
        return node;
    })

    setElements(es => ({
        ...es,
        nodes: nodes
    }));
}

const addObjInArray = (data, id, index, elements, setElements, setNodeProperty) => {
    let option = {
        id: getOptId(),
        value: data
    }
    const arr = [];
    elements?.nodes?.map((node) => node?.options?.map(opt => { arr.push(opt) }))
    let nodes = elements?.nodes?.map((node) => {
        if (node.id === id) {
            arr.push(option)
            node = {
                ...node,
                [index]: arr
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

const remObjInArray = (id, optId, indexOpt, elements, setElements, nodeProperty, setNodeProperty) => {
    const arr = [];
    nodeProperty[indexOpt].map(opt => { arr.push(opt) })
    let nodes = elements?.nodes?.map((node) => {
        if (node.id === id) {
            arr.map(opt => {
                if (opt.id === optId) {
                    const index = node[indexOpt].indexOf(opt);
                    if (index > -1) {
                        node[indexOpt].splice(index, 1);
                    }
                }
            })
            node = {
                ...node,
                [indexOpt]: node[indexOpt]
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

export {
    singleDataChange,
    addObjInArray,
    remObjInArray
}