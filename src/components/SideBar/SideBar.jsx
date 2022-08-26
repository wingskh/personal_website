import { useState } from "react";
import "./sideBar.scss";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  CssBaseline,
  List,
  Divider,
  Typography,
  ListItem,
  Toolbar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { changePageActionCreator } from "../../redux/userPreference/userPreferenceActions";

const sideBarItemList = [
  { text: "About", path: "/", icon: <DashboardIcon /> },
  { text: "Profile", path: "/profile", icon: <AccountBoxIcon /> },
  { text: "Project", path: "/projects", icon: <LibraryBooksIcon /> },
];

export const SideBar = () => {
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState("About");

  const handleSideBarItemClick = (itemName) => {
    dispatch(changePageActionCreator(itemName));
    setSelectedPage(itemName);
  };

  const tempComponent = (
    <div className="sidebarContainer">
      <div className="background">
        <div className="backgroundFilter" />
        <div className="content">
          <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="headerText">Wing</h2>
            </Link>
          </div>
          <hr />
          <div className="center">
            {sideBarItemList.map((item) => (
              <div className="sideBarItemContainer">
                <Link
                  to={item.path}
                  key={item.text}
                  className="sideBarItem"
                  onClick={() => handleSideBarItemClick(item.text)}
                >
                  <div className="sideBarItemIcon">{item.icon}</div>
                  <Box
                    className="sideBarItemText"
                    sx={{ display: { md: "block", xs: "none" } }}
                  >
                    {item.text}
                  </Box>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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
        sx={{
          width: drawerWidth,
          // maxWidth: drawerWidth,
          // width: "100%",
          flexShrink: 5,
          // position: "sticky",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            // width: "100%",
            // maxWidth: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        className="sidebarContainer"
      >
        <div className="background">
          <Typography variant="h5" component="div" className="headerText">
            Wing
          </Typography>
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
                    selected={selectedPage === item.text}
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
