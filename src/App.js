import { SideBar, NavBar } from "./components";

import { AboutPage, ProfilePage, ProjectsPage } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/app.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Grid } from "@mui/material";
import { useSelector } from "./redux/hooks";
import { styled, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { changePageActionCreator } from "./redux/userPreference/userPreferenceActions";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-260px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const theme = createTheme((theme) => ({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          paddingLeft: "0px !important",
          paddingRight: "20px !important",
        },
      },
      // border: item ? "red solid 5px" : "blue solid 5px",
    },
  },
}));

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const isSideBarOpened = useSelector((state) => state.isSideBarOpened);
  const dispatch = useDispatch();
  let curPage = window.location.href;
  curPage = curPage.substring(curPage.lastIndexOf("/") + 1);

  dispatch(
    changePageActionCreator(
      curPage.length === 0
        ? "About"
        : curPage[0].toUpperCase() + curPage.substring(1).toLowerCase()
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <Main className="bodyContainer" open={isSideBarOpened}>
        <BrowserRouter>
          <div>
            <SideBar />
          </div>
          <div className="webRightContainer">
            <NavBar />
            <div className="contentContainer">
              <Routes>
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  );
}

export default App;
