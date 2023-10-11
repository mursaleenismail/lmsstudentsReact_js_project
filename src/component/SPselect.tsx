import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SPSelect(props: any) {
  const { labelId, id, label, options, onChange, value } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
        >
          {options &&
            options.map((option: any, index: any) => (
              <MenuItem key={index} value={option.value}>
                {option.displayName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
