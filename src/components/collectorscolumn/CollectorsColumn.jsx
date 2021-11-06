import Collector from "../Collector/Collector";
import classNames from "classnames";
import styles from "./CollectorsColumn.module.scss";
import { Grid } from "@mui/material";
import propTypes from "prop-types";
const CollectorsColumns = (props) => {
  const { items } = props;

  return (
    <div
      className={classNames(styles.wrapper)}
      style={{ borderRadius: "15px 0 0 0px" }}
    >
      {items.map((el, i) => {
        return <Collector items={el} key={i} index={i} />;
      })}
    </div>
  );
};
CollectorsColumns.propTypes = {
  name: propTypes.string,
  nftsCount: propTypes.string,
  avatar: propTypes.string,
  verified: propTypes.bool,
  id: propTypes.number,
};
export default CollectorsColumns;
