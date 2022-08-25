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
  const pageClickHandler = (page) => {
    dispatch(changePageActionCreator(page));
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
                  onClick={() => pageClickHandler(item.text)}
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
  const drawerWidth = 280;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
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
            <ListItem key={item.text} disablePadding>
              <Link
                to={item.path}
                key={item.text}
                className="sideBarItem"
                onClick={() => pageClickHandler(item.text)}
              >
                <ListItemButton>
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
  );
};
