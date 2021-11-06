import propTypes from "prop-types";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../Avatar/Avatar";
import { Container, Typography } from "@mui/material";
const User = (props) => {
  const { name, info, avatar, size, verified } = props;
  return (
    <Container className={classNames(styles.user)} maxWidth="xl">
      <Avatar url={avatar} size={size} verified={verified} />
      <div className={classNames(styles.nameAndinfo)}>
        {" "}
        <Typography variant="body1" className={classNames(styles.name)}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          className={classNames(styles.info)}
          color="secondary"
        >
          {info}
        </Typography>
      </div>
    </Container>
  );
};
User.proptypes = {
  name: propTypes.string,
  size: propTypes.string,
  url: propTypes.string,
  verified: propTypes.bool,
};
export default User;
