import { useRouter } from "next/router";
import Container from "@mui/material/Container";

import styles from "./Featured.module.scss";
import classNames from "classnames";
import { ImageList, ImageListItem } from "@mui/material";
import propTypes from "prop-types";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Featured = (props) => {
  const { items } = props;
  const router = useRouter();

  const goTo = (to) => {
    router.push(to);
  };

  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <ImageList variant="quilted" cols={6}>
          {items.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => goTo(item.href)}
            >
              <img
                {...srcset(item.images, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};
Featured.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  rows: propTypes.number,
  cols: propTypes.number,
  href: propTypes.string,
};
export default Featured;
