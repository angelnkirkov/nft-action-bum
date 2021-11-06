import Container from "@mui/material/Container";

import styles from "./Trending.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Cards from "../Card/Cards";

export default function Trending(props) {
  const { cards } = props;
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <SectionHeading title="Trending"></SectionHeading>
        <Grid container spacing={2} style={{ paddingTop: "50px" }}>
          {cards.map((el, i) => (
            <Grid item md={3} style={{ height: "62px" }} key={i}>
              <Cards {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
