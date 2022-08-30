import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import styles from "./styles.module.scss";
import { SORT_QUERY_PARAM_KEY, SORT_OPTIONS } from "../../constants/sorting";

const SortSelect = () => {
  const [activeSort, setActiveSort] = useState("");
  const handleChange = (e) => {
    setActiveSort(e.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }} className={styles.outer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeSort}
          label="Sort By"
          onChange={handleChange}
        >
          {SORT_OPTIONS.map((option, i) => {
            return (
              <MenuItem key={i} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
