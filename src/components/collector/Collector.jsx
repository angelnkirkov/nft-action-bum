import User from "../User/User";
import { Grid, Typography } from "@mui/material";
import styles from "./Collector.module.scss";
import classNames from "classnames";

const Collector = (props) => {
  const { items, index } = props;

  return (
    <Grid
      container
      className={classNames(styles.container)}
      style={{
        background:
          items.id === 2
            ? "rgba(78, 36, 242, .2)"
            : items.id === 5
            ? "rgba(78, 36, 242, .2)"
            : items.id === 8
            ? "rgba(78, 36, 242, .2)"
            : items.id === 11
            ? "rgba(78, 36, 242, .2)"
            : "",
        borderRadius:
          index == 0 ? "15px 15px 0 0" : index == 2 ? " 0 0 15px 15px" : "",
      }}
    >
      <Grid
        item
        xs={3}
        className={classNames(styles.topCollectorNumberContainer)}
        style={{
          borderRadius:
            index == 0 ? "15px 0 0 0px" : index == 2 ? " 0 0 0 15px" : "",
        }}
      >
        <Typography
          variant="h6"
          className={classNames(styles.topCollectorNumber)}
        >
          {items.id}
        </Typography>
      </Grid>
      <Grid item xs={9} className={classNames(styles.userContainer)}>
        <User {...items} size="33px" info={items.nftsCount} />
      </Grid>
    </Grid>
  );
};
export default Collector;
