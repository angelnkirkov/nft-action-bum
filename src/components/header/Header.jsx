import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Logo from "../Logo/Logo";
import { FilledInput } from "@mui/material";
import { MenuItem } from "@mui/material";
import Link from "../link/Link";
import { Button } from "@mui/material";
const Header = () => {
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
          <Grid item md={2} style={{ height: "62px" }}>
            <Logo />
          </Grid>
          <Grid item md={5}>
            <div className={classNames(styles.searchContainer)}>
              {" "}
              <SearchIcon style={{ paddingTop: "3px" }} />
              <input
                type="text"
                placeholder="Find items, users and activities"
              />
            </div>
          </Grid>
          <Grid
            item
            md={5}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <MenuItem color="secondary">Home</MenuItem>
            </Link>
            <Link href="/">
              {" "}
              <MenuItem>Activity</MenuItem>
            </Link>
            <Button variant="contained" color="primary">
              EXPLORE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Header;
