import { useCallback, useEffect, useRef, useState } from "react";
import {
    Box,
    boxesIntersect,
    useSelectionContainer
} from "@air/react-drag-to-select";

export default function DragSelect() {
    const [selectionBox, setSelectionBox] = useState();
    const [selectedIndexes, setSelectedIndexes] = useState([]);
    const selectableItems = useRef([]);
    const elementsContainerRef = useRef(null);
    const onSelectionChange = useCallback(
        (box) => {
            setSelectionBox(box);
            const indexesToSelect = [];
            selectableItems.current.forEach((item, index) => {
                if (boxesIntersect(box, item)) {
                    indexesToSelect.push(index);
                }
            });

            setSelectedIndexes(indexesToSelect);
        },
        [selectableItems]
    );

    const { DragSelection } = useSelectionContainer({
        eventsElement: document.getElementById("root"),
        onSelectionChange,
        onSelectionStart: () => {
            console.log("OnSelectionStart");
        },
        onSelectionEnd: () => console.log("OnSelectionEnd"),
        selectionProps: {
            style: {
                border: "2px dashed purple",
                borderRadius: 4,
                backgroundColor: "brown",
                opacity: 0.5
            }
        }
    });

    useEffect(() => {
        if (elementsContainerRef.current) {
            Array.from(elementsContainerRef.current.children).forEach((item) => {
                const { left, top, width, height } = item.getBoundingClientRect();
                selectableItems.current.push({
                    left,
                    top,
                    width,
                    height
                });
            });
        }
    }, []);

    return (
        <div className="container">
            <DragSelection />
            <div
                id="elements-container"
                className="elements-container"
                ref={elementsContainerRef}
            >
                {Array.from({ length: 16 }, (_, i) => (
                    <div
                        key={i}
                        className={`element ${selectedIndexes.includes(i) ? "selected" : ""
                            } `}
                    />
                ))}
            </div>
        </div>
    );
}