import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import classNames from "classnames";
import Step from "../Step/Step";
import styles from "./How.module.scss";
import propTypes from "prop-types";

const How = (props) => {
  const { description, title, items, links } = props;
  console.log(description);

  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} className={classNames(styles.howLeft)}>
            <Typography variant="h1">{title}</Typography>
            <Typography
              variant="body1"
              className={classNames(styles.worksText)}
            >
              {description}
            </Typography>{" "}
            <Button
              variant="contained"
              href={links}
              style={{
                backgroundColor: "#fff",
                color: "#4E24F2",
              }}
            >
              LEARN MORE
            </Button>
          </Grid>
          <Grid item md={6} lg={5} className={classNames(styles.stepContainer)}>
            {items.map((el, i) => (
              <Step {...el} number={i + 1} key={i} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

How.propTypes = {
  description: propTypes.string,
  title: propTypes.string,
  link: propTypes.link,
  items: propTypes.array,
};

export default How;
