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
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { changeSideBarActionCreator } from "../../redux/userPreference/userPreferenceActions";

export const NavBar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.page);
  const isSideBarOpened = useSelector((state) => state.isSideBarOpened);

  const handleSideBarOpenClick = (itemName) => {
    dispatch(changeSideBarActionCreator(true));
  };

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
        // position="sticky"
        position="sticky"
        component="nav"
        className="navbarContainer"
        open={isSideBarOpened}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideBarOpenClick}
            sx={{
              // marginLeft: "-5px",
              ml: -1,
              mr: 2,
              ...(isSideBarOpened && {
                display: "none",
              }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {curPage}
          </Typography>
          <Divider />
          <Clock />
          <div className="items">
            <div className="item notShownInMobile">
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
