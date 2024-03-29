import { SideBar, NavBar } from "./components";
import {
  HomePage,
  ProfilePage,
  CompetitiveCodingPage,
  ProjectsPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "./redux/hooks";
import { changePageActionCreator } from "./redux/userPreference/slice";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome, faCheckSquare, faCoffee);
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "auto",
  marginLeft: `-260px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          // paddingLeft: "0px !important",
          // paddingRight: "20px !important",
        },
      },
    },
  },
});

function App() {
  const isSideBarOpened = useSelector(
    (state) => state.userPreference.isSideBarOpened
  );
  const dispatch = useDispatch();
  let curPage = window.location.href;
  curPage = curPage.substring(curPage.lastIndexOf("/") + 1);
  if (curPage.length === 0) {
    curPage = "Home";
  } else {
    curPage = curPage[0].toUpperCase() + curPage.substring(1);
    curPage = curPage.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  }

  dispatch(changePageActionCreator(curPage));

  return (
    <ThemeProvider theme={theme}>
      <Main className="bodyContainer" open={isSideBarOpened}>
        <BrowserRouter>
          <div style={{ display: "flex", width: "fit-content" }}>
            <SideBar />
          </div>
          <div className="webRightContainer">
            <NavBar />
            <div className="contentContainer">
              <div style={{ width: "100%" }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route
                    path="/competitiveCoding"
                    element={<CompetitiveCodingPage />}
                  />
                  <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Main>
    </ThemeProvider>
  );
}

export default App;
