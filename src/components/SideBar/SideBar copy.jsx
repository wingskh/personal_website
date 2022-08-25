import "./sideBar.scss";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  changePageActionCreator,
} from "../../redux/userPreference/userPreferenceActions";

const sideBarItemList = [
  { text: "About", path: "/", icon: <DashboardIcon /> },
  { text: "Profile", path: "/profile", icon: <AccountBoxIcon /> },
  { text: "Project", path: "/projects", icon: <LibraryBooksIcon /> },
];

export const SideBarTemp = () => {
  const dispatch = useDispatch();
  const pageClickHandler = (page) => {
    dispatch(changePageActionCreator(page));
  };

  return (
    <div className="sidebarContainer">
      {/* <div className="imgContainer" />
      <div className="background" /> */}
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
};
