import Container from "@mui/material/Container";

import SectionHeading from "../SectionHeading/SectionHeading";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Cards from "../Card/Cards";
import styles from "./Auctions.module.scss";

export default function LiveAuction(props) {
  const { cards } = props;
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <SectionHeading title="🔥 Live Auctions"></SectionHeading>
        <Grid container spacing={2} style={{ paddingTop: "50px" }}>
          {cards.map((el, i) => (
            <Grid item md={3} key={i}>
              <Cards {...el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
