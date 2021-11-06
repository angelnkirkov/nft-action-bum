var _ = require("lodash");
import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import classNames from "classnames";
import { Grid } from "@mui/material";
import CollectorsColumn from "../CollectorsColumn/CollectorsColumn";
import propTypes from "prop-types";

export default function TopCollector(props) {
  const { collector } = props;

  const newCollector = collector.map((el, i) => {
    return { ...el, id: 1 + i };
  });
  const itemsArray = _.chunk(newCollector, 3);
  console.log(itemsArray);
  return (
    <div className={classNames(styles.wrapper)}>
      <Container maxWidth="xl">
        <SectionHeading
          title="Top Collectors"
          background="rgba(78, 36, 242, .2)"
        ></SectionHeading>
        <Grid container className={classNames(styles.container)} spacing={2}>
          {itemsArray.map((el, i) => (
            <Grid xs={3} item key={i}>
              <CollectorsColumn items={el} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
TopCollector.propTypes = {
  name: propTypes.string,
  nftsCount: propTypes.string,
  avatar: propTypes.string,
  verified: propTypes.bool,
  id: propTypes.number,
};
