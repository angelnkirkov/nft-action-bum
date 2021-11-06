import SearchIcon from "@mui/icons-material/Search";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Logo from "../Logo/Logo";
import { MenuItem } from "@mui/material";
import Link from "../link/Link";
import { Button } from "@mui/material";
const Footer = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item md={4} style={{ height: "62px" }}>
            <Logo type="muted" />
          </Grid>
          <Grid
            item
            md={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: "0.5",
            }}
          >
            <Typography variant="body2">
              {" "}
              Bum All Rights Reserved 2021
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link href="/privacypolicy">
              <MenuItem color="secondary">Privacy Policy</MenuItem>
            </Link>
            <Link href="/cookiepolicy">
              {" "}
              <MenuItem>Cookie Policy</MenuItem>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Footer;
