import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./styles.module.scss";
import { SORT_QUERY_PARAM_KEY, SORT_OPTIONS } from "../../constants/sorting";

const SortSelect = () => {
  const router = useRouter();

  const handleChange = (e) => {
    //allow targeting of router query excluding the sort property
    const { [SORT_QUERY_PARAM_KEY]: currSortValue, ...nextQuery } =
      router.query;
    // add in the new sort property with selected sort value
    if (e.target.value !== "new")
      nextQuery[SORT_QUERY_PARAM_KEY] = e.target.value;
    router.push({
      pathname: router.pathname,
      query: nextQuery,
    });
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles.outer}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={router.query[SORT_QUERY_PARAM_KEY]} // keep track of value with router query
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
