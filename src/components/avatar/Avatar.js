import propTypes from "prop-types";
import styles from "./Avatar.module.scss";
import classNames from "classnames";
const Avatar = (props) => {
  const { size, url, verified } = props;

  return (
    <div
      className={classNames(styles.avatar)}
      style={{ width: size, height: size }}
    >
      <img src={url} alt="" className={classNames(styles.image)} />
      {verified && (
        <img
          src="./images/verified.svg"
          alt=""
          className={classNames(styles.badge)}
          style={{
            width: size && "18px",
            bottom: size && "2px",
            right: size && "-8px",
          }}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: propTypes.string,
  url: propTypes.string,
  verified: propTypes.bool,
};
export default Avatar;
