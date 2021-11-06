import * as React from "react";
import propTypes from "prop-types";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "../Avatar/Avatar";
import classNames from "classnames";
import Countdown from "react-countdown";
import styles from "./Cards.module.scss";

import millify from "millify";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

export default function Cards(props) {
  const { name, likes, mediaUrl, user, price, currency, timeLeft } = props;
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classNames(styles.card)}
      style={{ background: timeLeft && "rgba(36, 242, 94, .1)" }}
    >
      <CardHeader
        className={classNames(styles.cardHeader)}
        avatar={
          <Avatar
            url={user.avatarUrl}
            size="33px"
            verified={user.verified}
          ></Avatar>
        }
      ></CardHeader>

      <div style={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={mediaUrl}
          alt="media"
          className={classNames(styles.media)}
        />
        {timeLeft && (
          <>
            {" "}
            <div className={classNames(styles.liveContainer)}>
              <img src="./images/dot.png" alt="" />
              <Typography variant="body2" className={classNames(styles.live)}>
                LIVE
              </Typography>
            </div>
            <div className={classNames(styles.timeContainer)}>
              <Typography variant="body1" className={classNames(styles.time)}>
                <Countdown date={Date.now() + timeLeft} renderer={renderer} />
              </Typography>
            </div>
          </>
        )}
      </div>

      <div className={classNames(styles.cardFooter)}>
        <div>
          <Typography variant="body2" className={classNames(styles.title)}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            className={classNames(styles.price)}
          >
            {price} {currency}
          </Typography>
        </div>
        <Chip
          label={millify(likes)}
          avatar={
            <img
              src="./images/love.svg"
              alt=""
              className={classNames(styles.img)}
            />
          }
          color="secondary"
          variant="outlined"
          className={classNames(styles.likes)}
        ></Chip>
      </div>
    </Card>
  );
}

// Cards.propTypes = {
//   name: propTypes.string,
//   likes: propTypes.number,
//   mediaUrl: propTypes.string,
//   user: {
//     avatarUrl: propTypes.string,
//     verified: propTypes.bool,
//   },
//   price: propTypes.string,
//   currency: propTypes.string,
// };
