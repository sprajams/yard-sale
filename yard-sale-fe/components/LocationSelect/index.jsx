import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./styles.module.scss";

const LocationSelect = ({ locationData }) => {
  const router = useRouter();
  // user selection updates the query in the url
  const handleChange = (e) => {
    router.push({
      pathname: router.pathname,
      query: { location: e.target.value, ...router.query },
    });
  };

  return (
    <div className={styles.outer}>
      <h1 className={styles.prefixText}>Browsing local yard sales in</h1>
      <FormControl style={{ margin: "0", padding: "0" }} variant="standard">
        <Select
          value={router.query.location || "los-angeles"}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={styles.selectedLocation}
          disableUnderline
          style={{ margin: "0", padding: "0" }}
        >
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
