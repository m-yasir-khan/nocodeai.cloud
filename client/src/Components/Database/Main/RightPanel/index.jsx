import React, { useState } from 'react'
import { constants } from '../../../../Utils/constants';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Table } from '@mui/material';


const RightPanel = () => {
  const [dataset, setDataset] = useState('');
  const [table, setTable] = useState('');
  const [column, setColumn] = useState('');

  // console.log(dataset, "DATASET==>")
  // console.log(table, "TABLE==>")
  // console.log(column, "Column==>")
  const datasets = [
    {
      id: 1,
      dataset: 'dataset 1',
      tables: [{
        id: 1,
        table: 'table 1',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 2,
        table: 'table 2',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 3,
        table: 'table 3',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 4,
        table: 'table 4',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 5,
        table: 'table 5',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      }]
    },
    {
      id: 2,
      dataset: 'dataset 2',
      tables: [{
        id: 1,
        table: 'table 1',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 2,
        table: 'table 2',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 3,
        table: 'table 3',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 4,
        table: 'table 4',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      },
      {
        id: 5,
        table: 'table 5',
        columns: [{
          id: 1,
          col: 'column 1'
        },
        {
          id: 2,
          col: 'column 2'
        },
        {
          id: 3,
          col: 'column 3'
        },
        ]
      }]
    },
    {
      id: 3,
      dataset: 'dataset 3',
    }
  ]

  const tables = [{
    id: 1,
    table: 'table 1',
    columns: [{
      id: 1,
      col: 'column 1'
    },
    {
      id: 2,
      col: 'column 2'
    },
    {
      id: 3,
      col: 'column 3'
    },
    ]
  },
  {
    id: 2,
    table: 'table 2',
    columns: [{
      id: 1,
      col: 'column 1'
    },
    {
      id: 2,
      col: 'column 2'
    }
    ]
  },
  {
    id: 3,
    table: 'table 3',
    columns: [{
      id: 1,
      col: 'column 1'
    },
    {
      id: 2,
      col: 'column 2'
    },
    {
      id: 3,
      col: 'column 3'
    },
    ]
  },
  {
    id: 4,
    table: 'table 4',
    columns: [{
      id: 1,
      col: 'column 1'
    }
    ]
  },
  {
    id: 5,
    table: 'table 5',
    columns: [{
      id: 1,
      col: 'column 1'
    },
    ]
  }]
  const columns = [{
    id: 1,
    col: 'column 1'
  },
  {
    id: 2,
    col: 'column 2'
  },
  {
    id: 3,
    col: 'column 3'
  },
  ]
  const handleChangeDataset = (event) => {
    setDataset(event.target.value);
  };

  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
  };

  return (
    <div className='properties_Panel'>
      <p style={{ fontSize: '20px' }}> <constants.MdSettingsSuggest className='sidebar-icons' />DB Properties</p>
      <div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label">Datasets</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataset}
            label="Datasets"
            onChange={handleChangeDataset}
          >
            {datasets && datasets.map((v) => <MenuItem key={v.id} value={v.dataset}>{v.dataset}</MenuItem>)}
            {/* // <MenuItem value={10}>Ten</MenuItem>
            // <MenuItem value={20}>Twenty</MenuItem>
            // <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <FormHelperText>Select Dataset From Database</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tables</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={table}
            label="Table"
            onChange={handleChangeTable}
          >
            {tables && tables.map((v) => <MenuItem key={v.id} value={v.table}>{v.table}</MenuItem>)}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <FormHelperText>Select Table From Dataset</FormHelperText>
        </FormControl>
      </div>
      <div style={{ margin: '10px 2px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Column</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={column}
            label="Column"
            onChange={handleChangeColumn}
          >
            {columns && columns.map((v) => <MenuItem key={v.id} value={v.col}>{v.col}</MenuItem>)}
            {/*            
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <FormHelperText>Select Column From Table</FormHelperText>
        </FormControl>
      </div>
    </div>
  )
}

export default RightPanel