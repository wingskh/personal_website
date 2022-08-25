import { SideBar, NavBar } from "./components";

import { AboutPage, ProfilePage, ProjectsPage } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/app.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Grid } from "@mui/material";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="bodyContainer">
      <BrowserRouter>
        <div>
          <SideBar />
        </div>
        <div className="right">
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
    </div>
  );
}

export default App;
