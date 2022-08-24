import { SideBar, NavBar } from "./components";

import { HomePage, ProfilePage, ProjectsPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/app.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Grid } from "@mui/material";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    // <div className={darkMode ? "app dark" : "app"}>
    <Grid container spacing={0} className="bodyContainer">
      <BrowserRouter>
        <Grid item xs={2}>
          <SideBar className="sideBarContainer" />
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12} className="navBarContainer">
            <NavBar />
          </Grid>
          <Grid item xs={12} className="contentContainer">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
