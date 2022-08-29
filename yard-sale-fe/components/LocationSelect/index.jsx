import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./styles.module.scss";

const LocationSelect = ({ locationData }) => {
  const router = useRouter();

  // user selection updates the query in the url
  const handleChange = (e) => {
    // removes location if present
    const { location, ...nextQuery } = router.query;
    // add in selected location IF "all" is not selected
    if (e.target.value !== "all") {
      // add location
      nextQuery.location = e.target.value;
    }

    router.push({
      pathname: router.pathname,
      query: nextQuery,
    });
  };

  // true if router.query is an empty obj or contains "all" in location query
  const locationAllOrEmpty =
    Object.keys(router.query).length === 0 ||
    (router.query.location && router.query.location.includes("all"));

  return (
    <div className={styles.outer}>
      {/* TODO: make h1 and select inline */}
      <h1 className={styles.prefixText}>
        Browsing local yard&nbsp;sales{" "}
        {locationAllOrEmpty ? "" : <span>in </span>}
      </h1>

      <FormControl
        style={{ margin: "0", padding: "0", display: "inline" }}
        variant="standard"
      >
        <Select
          value={router.query.location || "all"}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={styles.selectedLocation}
          disableUnderline
          style={{ margin: "0", padding: "0" }}
        >
          <MenuItem value={"all"} style={{ padding: "0" }}>
            <a className={styles.locationLink}>everywhere</a>
          </MenuItem>
          {locationData.length > 0 &&
            locationData.map((location, i) => {
              return (
                <MenuItem
                  key={i}
                  value={location.slug}
                  style={{ padding: "0" }}
                >
                  {/* TODO: change href to link to postings from that location */}
                  <a className={styles.locationLink}>
                    {location.city}, {location.state}
                  </a>
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationSelect;
