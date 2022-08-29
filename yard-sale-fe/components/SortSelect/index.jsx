import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import styles from "./styles.module.scss";

const SortSelect = () => {
  const [activeSort, setActiveSort] = useState("");
  const handleChange = (e) => {
    setActiveSort(e.target.value);
  };
  return (
    <Box sx={{ minWidth: " 120px" }} className={styles.outer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeSort}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={"new"}>Newest</MenuItem>
          <MenuItem value={"low"}>Price: Low to High</MenuItem>
          <MenuItem value={"high"}>Price: High to Low</MenuItem>
          <MenuItem value={"A"}>A to Z</MenuItem>
          <MenuItem value={"Z"}>Z to A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
