
import { useState, useEffect } from 'react';
import {Spreadsheet} from "react-spreadsheet";
import { Chart } from "react-google-charts";
import CustomContextMenu from "../customContextMenu"

var data = [
    [ { value: "Task Name" }, { value: "Duration (min)" }, { value: "Progress %" }, { value: "Resource Name" }],
    [ { value: "Develop Functional Specification" }, { value: 70 }, { value: 100 }, { value: "Resource Name" }],
    [ { value: "Develop Prototype" }, { value: 5 }, { value: 100 }, { value: "Resource Name" }],
    [ { value: "Review Functional Specification" }, { value: 10 }, { value: 60 }, { value: "Resource Name" }],
    [ { value: "Incorporate Feedback" }, { value: 45 }, { value: 50 }, { value: "Resource Name" }],
    [ { value: "Obtain Apropval" }, { value: 10 }, { value: 70 }, { value: "Resource Name" }],
    [ { value: "Design Complete",   readOnly:true }, { value: 2 }, { value: 25 }, { value: "Resource Name" }],
];

function Software(props) {
    const [rowSelected, setRawSelected] = useState({ isSelected: false, value: 0 });

    const [sheetData, setSheetData] = useState(data);

    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
    ];

   
    const gant_rows =
        sheetData.map((row, index) => {
            if (index != 0) {
                return (
                    [`toTrain${index}`, `${row[1].value}`, `walk1${index}`, null, null, row[2].value * 60 * 100, row[3].value, null]
                );
            }

        })
    gant_rows.splice(0, 1);
    const ganttData = [columns, ...gant_rows];
    const options = {
        height: 65+ (gant_rows.length)*35,
        gantt: {
            defaultStartDateMillis: new Date(2015, 3, 28),
        },
    };

    const onSelect = (selected) => {
        if (selected.length > 3) {
            setRawSelected({ isSelected: true, value: selected[0]?.row });
        }
        else {
            setTimeout(() => {
                setRawSelected({ isSelected: false, value: selected[0]?.row });
            }, 1000);
        }

    }

    const onOptionClicked = (e, option) => {
        if (option == "Add Task") {
            const item = [{ value: "Auto" }, { value: "Default" }, { value: 5 }, { value: 100 }, { value: "Default" }];
            data = Object.assign([], data);
            data.splice(rowSelected.value + 1, 0, item);
            setSheetData(data);
        }
        else if (option == "Delete") {
            data = Object.assign([], data);
            data.splice(rowSelected.value, 1);
            setSheetData(data);
        }

    }

const myCell={row:2,column:2,mode:"view",data:{value:"asda"}}

    return (
        <div style={{ width: '100%' }} id="customContextmenuArea1" >
            <div className='project'><label>Software Development</label></div>
            <Chart
                chartType="Gantt"
                width="100%"
                height="100%"
                data={ganttData}
                options={options}
            />
            <Spreadsheet className='spreadSheet' columnLabels={["Task Name","Duration","Progress","Resource Name"]} data={sheetData} onChange={(coords) => setSheetData(coords)} onSelect={onSelect} />
            <CustomContextMenu
                targetId='customContextmenuArea1'
                options={['Add Task', 'Delete']}
                classes={{
                    listWrapper: 'customContextmenuArea1ListWrapper',
                    listItem: 'customContextmenuArea1ListItem'
                }}
                visible={rowSelected.isSelected}
                onClick={onOptionClicked}
            />
        </div >

    );
}

export default Software;








// import React, { useState, useEffect } from 'react';
// import Spreadsheet from "react-spreadsheet";
// import { Chart } from "react-google-charts";
// import CustomContextMenu from "../customContextMenu"
// import { Button } from 'antd';



// const data = [
//     { task_mode: "Anom", task_name: 19, duration: "Male" },
//     { task_mode: "Megha", task_name: 19, duration: "Female" },
//     { task_mode: "Subham", task_name: 25, duration: "Male" },
// ]
// const add = { task_mode: "NEW", task_name: 25, duration: "FeMale" };


// function Software() {

//     const [allTask, setAllTasks] = useState([])
//     const [new_task, setNewTask] = useState(add)
//     useEffect(()=>{
//         setAllTasks([...data])
//     },[data])

//     let handleInput = e => {
//         const buttonValue = e.target.value;
//         console.log(buttonValue);
//         let neww  = [...allTask]
//         data.splice(buttonValue+1, 0, add)
//         setAllTasks([neww,data])
//         console.log(allTask, "222")
//     }


//     function sayHello({ key }) {
//         alert({ key });
//     }
//     return (
//         <div style={{ width: '100%' }} id="customContextmenuArea1" >
//             <table>
//                 <tr>
//                     <th></th>
//                     <th>task_mode</th>
//                     <th>task_name</th>
//                     <th>duration</th>
//                 </tr>
//                 {data.map((val, key) => {
//                     // console.log(key)
//                     return (
//                         <tr key={key}>
//                             <td>
//                                 <button value={key} onClick={handleInput}>+</button></td>
//                             <td>{val.task_mode}</td>
//                             <td>{val.task_name}</td>
//                             <td>{val.duration}</td>
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div >

//     );
// }

// export default Software;







