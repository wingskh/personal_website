import { SideBar, NavBar } from "../../components";
import "./projects.scss";
import { Grid } from "@mui/material";

export const ProjectsPage = () => {
  return (
    <div className="projectsContainer">
      <Grid container spacing={2} className="gridContainer">
        <Grid item xs={12}>
          <div className="sectionTitle">
            <a href="https://github.com/wingskh" target="_blank">
              Coming soon... Open GitHub First
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
