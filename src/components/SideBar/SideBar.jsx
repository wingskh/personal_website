import "./sideBar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";

const sideBarItemList = [
  { text: "Home", path: "/", icon: <DashboardIcon /> },
  { text: "Profile", path: "/profile", icon: <AccountBoxIcon /> },
  { text: "Project", path: "/projects", icon: <LibraryBooksIcon /> },
];

export const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="imgContainer" />
      <div className="background" />
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
              <Link to={item.path} className="sideBarItem">
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
          {/* <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul> */}
        </div>

        {/* <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div> */}
      </div>
    </div>
  );
};
