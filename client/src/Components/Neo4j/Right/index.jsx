import React from "react";
import { MdSettingsSuggest } from "react-icons/md";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";

const dbProperties = [
  {
    value: "USD",
    label: "dataset1",
  },
  {
    value: "EUR",
    label: "dataset2",
  },
  {
    value: "BTC",
    label: "dataset3",
  },
  {
    value: "JPY",
    label: "dataset4",
  },
];

const Index = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <h3 className="heading_left">
        <span className="left-icons">
          <MdSettingsSuggest />
        </span>
        Neo4j Properties
      </h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "92%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Datasets"
            value={dbProperties}
            onChange={handleChange}
            helperText="Select Dataset From Database"
          >
            {dbProperties.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency-native"
            select
            label="Schema"
            value={dbProperties}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Select Schema From Database"
          >
            {dbProperties.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <br />
          <TextField
            id="outlined-select-currency-native"
            select
            label="Column"
            value={dbProperties}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Select Column From Schema"
          >
            {dbProperties.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div></div>
      </Box>
    </>
  );
};

export default Index;
