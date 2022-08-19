import { useState } from "react";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./styles.module.scss";

const LocationSelect = ({ locationData }) => {
  const [location, setLocation] = useState("Los Angeles");
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={styles.outer}>
      <h1 className={styles.prefixText}>Browsing local yard sales in</h1>
      <FormControl style={{ margin: "0", padding: "0" }} variant="standard">
        <Select
          value={location}
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
                  value={location.city}
                  style={{ padding: "0" }}
                >
                  {/* TODO: change href to link to postings from that location */}
                  <Link href={`/`}>
                    <a className={styles.locationLink}>
                      {location.city}, {location.state}
                    </a>
                  </Link>
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationSelect;
