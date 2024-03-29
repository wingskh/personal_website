import "./NavBar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import userIcon from "../../assets/images/slack.png";
import { Clock } from "../";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { changeSideBarActionCreator } from "../../redux/userPreference/slice";

export const NavBar = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.userPreference.page);
  const isSideBarOpened = useSelector(
    (state) => state.userPreference.isSideBarOpened
  );

  const handleSideBarOpenClick = () => {
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
      <AppBar position="sticky" component="nav" className="navbarContainer">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideBarOpenClick}
            sx={{
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
