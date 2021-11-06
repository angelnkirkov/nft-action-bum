import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { FormControl, Select, MenuItem } from "@mui/material";
import classNames from "classnames";
import styles from "./SectionHeading.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SectionHeading = (props) => {
  const [days, setdays] = React.useState("");
  const { background, title } = props;

  const handleChange = (event) => {
    setDays(event.target.value);
  };
  useEffect(() => {
    document.querySelector(".MuiSelect-select").classList.add("my-select");
    document.querySelector(".MuiSelect-select").style.background = background;
    document.querySelector(".MuiSelect-select").style.outline = "none";
    document.querySelector(".MuiSelect-select").style.padding = "10px 30px";
  }, []);
  return (
    <div className={classNames(styles.wrapper)}>
      <Typography variant="h2">{title}</Typography>
      <FormControl sx={{ minWidth: 150 }}>
        <Select
          value={days}
          onChange={handleChange}
          displayEmpty
          className={classNames(styles.mySelect)}
          IconComponent={KeyboardArrowDownIcon}
          variant="outlined"
        >
          <MenuItem
            value=""
            className={classNames(styles.mySelectItem)}
            style={{ padding: "5px 15px" }}
          >
            {" "}
            <Typography variant="body2">This Week</Typography>
          </MenuItem>
          <MenuItem value={10} className={classNames(styles.mySelectItem)}>
            {" "}
            <Typography variant="body2">This Week</Typography>Ten
          </MenuItem>
          <MenuItem value={20} className={classNames(styles.mySelectItem)}>
            {" "}
            <Typography variant="body2">This Week</Typography>
          </MenuItem>
          <MenuItem value={30} className={classNames(styles.mySelectItem)}>
            {" "}
            <Typography variant="body2">This Week</Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SectionHeading;
