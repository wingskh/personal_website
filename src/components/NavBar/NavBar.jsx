import React from "react";
import "./navBar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import userIcon from "../../assets/images/slack.png";
import { Clock } from "../";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "../../redux/hooks";

export const NavBar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const curPage = useSelector((state) => state.page);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tempComponent = (
    <div className="navbarContainer">
      <Clock />
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          &nbsp;English
        </div>
        <div className="item">
          <img src={userIcon} alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#eee",
            color: "#555",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        component="nav"
        position="sticky"
        enableColorOnDark
        className="navbarContainer"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {curPage}
          </Typography>
          {/* <Divider /> */}
          <Clock />
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              &nbsp;English
            </div>
            <div className="item">
              <img src={userIcon} alt="" className="avatar" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
