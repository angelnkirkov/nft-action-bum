import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import classNames from "classnames";
import styles from "./Step.module.scss";
import propTypes from "prop-types";

const Step = (props) => {
  const { number, title, description } = props;
  return (
    <div
      className={classNames(styles.wrapper)}
      style={{ margin: number === 2 && "30px 0" }}
    >
      <Grid container className={classNames(styles.worksContainer)}>
        <Grid item xs={3} className={classNames(styles.worksNumberContainer)}>
          <Typography variant="h1" className={classNames(styles.worksNumber)}>
            {number}
          </Typography>
        </Grid>
        <Grid item xs={9} className={classNames(styles.worksItemsContainer)}>
          <div>
            <Typography
              variant="h5"
              className={classNames(styles.worksHeading)}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className={classNames(styles.worksSubheading)}
            >
              {description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
Step.propTypes = {
  number: propTypes.number,
  title: propTypes.string,
  description: propTypes.string,
};
export default Step;
