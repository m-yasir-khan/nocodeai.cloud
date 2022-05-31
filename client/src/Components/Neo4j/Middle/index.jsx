// import React,{useState} from 'react'
import "./index.css";
import { Input } from "antd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";
import { UserOutlined } from "@ant-design/icons";
import { VscEditorLayout } from "react-icons/vsc";
function createData(name, id, query, rows) {
  return { name, id, query, rows };
}

const rows = [
  createData("Dataset1", 159, 6.0, 24),
  createData("Dataset2", 237, 9.0, 37),
  createData("Dataset3", 262, 16.0, 24),
  createData("Dataset4", 305, 3.7, 67),
];

// const { TextArea } = Input;
const Index = () => {
  const [hintData, setHintData] = useState([]);
  const [text, setText] = useState("");

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    var hintArray = [];
    res.data.map((a) => hintArray.push(a.name));
    setHintData(hintArray);
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <h3 className="heading">
        <span className="left-icons">
          <VscEditorLayout />
        </span>
        Query Editor
      </h3>

      <div className="App">
        {/* <h5>Try typing these words</h5> */}
        {/* <code>{`[${hintData.toString()}]`}</code> */}

        <Hint options={hintData} allowTabFill>
          <input
            className="input-with-hint"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Hint>
      </div>

      <br />

      {/* Table */}
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead className="table_head">
            <TableRow>
              <TableCell className="table_head">Name</TableCell>
              <TableCell  className="table_head" align="right">Id</TableCell>
              <TableCell  className="table_head" align="right">Query</TableCell>
              <TableCell  className="table_head" align="right">Rows</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow className="table_row"
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.query}</TableCell>
                <TableCell align="right">{row.rows}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Index;
