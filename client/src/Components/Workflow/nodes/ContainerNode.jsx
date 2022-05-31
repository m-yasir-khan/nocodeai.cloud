import { useCallback } from 'react';
import '../style.css';
import { Rnd } from "react-rnd";

function ContainerNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const style = {
        color: "#333",
        border: "1px solid #333",
        height: "40px",
        width: "70px",
        display: "flex",
        borderRadius: "3px"
    }

    return (
        <div className="flow-label">
            <Rnd default={{
                x: 10,
                y: 30,
                width: 200,
                height: 150,
            }}
                minWidth={100}
                minHeight={80}
                bounds="window"
                enableResizing={{ bottomRight: true }}
                style={style}>
                <div style={{padding: "20px"}}>
                </div>
            </Rnd>
        </div>
    );
}

export default ContainerNode;