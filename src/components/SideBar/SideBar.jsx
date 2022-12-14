import React, { useState } from "react";
import "./sideBar.scss";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  Divider,
  Typography,
  ListItem,
  Toolbar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  changePageActionCreator,
  changeSideBarActionCreator,
} from "../../redux/userPreference/userPreferenceActions";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const sideBarItemList = [
  { text: "Home", path: "/", icon: <DashboardIcon /> },
  { text: "Profile", path: "/profile", icon: <DashboardIcon /> },
  {
    text: "Competitive Coding",
    path: "/competitiveCoding",
    icon: <AccountBoxIcon />,
  },
  // { text: "Projects", path: "/projects", icon: <LibraryBooksIcon /> },
];

export const SideBar = () => {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState("Profile");
  const isSideBarOpened = useSelector((state) => state.isSideBarOpened);
  const curPage = useSelector((state) => state.page);
  // const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleSideBarItemClick = (itemName) => {
    dispatch(changePageActionCreator(itemName));
    setSelectedPage(itemName);
    if (window.innerWidth < 800) {
      handleSideBarHideClick();
    }
  };

  const handleSideBarHideClick = () => {
    dispatch(changeSideBarActionCreator(false));
  };

  const drawerWidth = 260;
  const theme = createTheme({
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "red",
            },
          },
        },
      },
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const hexToRgb = (input) => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
      throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
      let first = input[0];
      let second = input[1];
      let last = input[2];
      input = first + first + second + second + last + last;
    }
    input = input.toUpperCase();
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
      parseInt(first, 16) +
      ", " +
      parseInt(second, 16) +
      ", " +
      parseInt(last, 16)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isSideBarOpened}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            // width: "100%",
            // maxWidth: drawerWidth,
            boxSizing: "border-box",
          },
          // display: { md: "block", xs: "none" },
        }}
        className="sidebarContainer"
      >
        <div className="background">
          <DrawerHeader style={{ height: "60px", minHeight: "0px" }}>
            <div className="headerContainer">
              {/* <div style={{ flex: 1 }}></div> */}
              <div style={{ flex: 1 }}></div>
              <Typography variant="h5" component="div" className="headerText">
                Wing
              </Typography>
              <div className="drawerIconButtonContainer">
                <IconButton
                  onClick={handleSideBarHideClick}
                  className="drawerIconButton"
                >
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
            </div>
          </DrawerHeader>
          <Divider />

          <Divider className="topDivider" />
          <div className="backgroundFilter" />
          <List className="sideBarItemContainer">
            {sideBarItemList.map((item) => (
              <ListItem
                disablePadding
                key={item.text}
                sx={{ margin: "10px 15px 0", width: "auto" }}
              >
                <Link
                  to={item.path}
                  key={item.text}
                  className="sideBarItem"
                  onClick={() => handleSideBarItemClick(item.text)}
                >
                  <ListItemButton
                    sx={{
                      borderRadius: "3px",
                      "&.Mui-selected": {
                        backgroundColor: "#00acc1",
                        boxShadow:
                          "0 12px 20px -10px rgba(" +
                          hexToRgb("#00acc1") +
                          ",.28), 0 4px 20px 0 rgba(" +
                          hexToRgb("#000") +
                          ",.12), 0 7px 8px -5px rgba(" +
                          hexToRgb("#00acc1") +
                          ",.2)",
                        "&:hover,&:focus": {
                          backgroundColor: "#00acc1",
                          boxShadow:
                            "0 12px 20px -10px rgba(" +
                            hexToRgb("#00acc1") +
                            ",.28), 0 4px 20px 0 rgba(" +
                            hexToRgb("#000") +
                            ",.12), 0 7px 8px -5px rgba(" +
                            hexToRgb("#00acc1") +
                            ",.2)",
                        },
                      },
                      "&.Mui-focusVisible": {
                        backgroundColor: "#00acc1",
                        boxShadow:
                          "0 12px 20px -10px rgba(" +
                          hexToRgb("#00acc1") +
                          ",.28), 0 4px 20px 0 rgba(" +
                          hexToRgb("#000") +
                          ",.12), 0 7px 8px -5px rgba(" +
                          hexToRgb("#00acc1") +
                          ",.2)",
                        "&:hover,&:focus": {
                          backgroundColor: "#00acc1",
                          boxShadow:
                            "0 12px 20px -10px rgba(" +
                            hexToRgb("#00acc1") +
                            ",.28), 0 4px 20px 0 rgba(" +
                            hexToRgb("#000") +
                            ",.12), 0 7px 8px -5px rgba(" +
                            hexToRgb("#00acc1") +
                            ",.2)",
                        },
                      },
                      // // hover style
                      // ":hover": {
                      // },
                    }}
                    selected={curPage === item.text}
                  >
                    <ListItemIcon className="sideBarItemIcon">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};
