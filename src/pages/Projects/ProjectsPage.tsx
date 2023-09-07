import Grid from "@mui/material/Unstable_Grid2";
import { Project } from "../../components";
import { projectData } from "./projectData";
import "./ProjectsPage.scss";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="projectsContainer">
      <div className="projectHeader">Website</div>
      <Grid container spacing="20px" className="gridContainer">
        {projectData.web.map((project, index) => (
          <Grid xs={12} sm={12} md={6} key={index}>
            <Project project={project} projectType="web" key={index} />
          </Grid>
        ))}
      </Grid>
      <div className="projectHeader">App</div>
      <Grid container spacing="20px" className="gridContainer">
        {projectData.app.map((project, index) => (
          <Grid xs={12} sm={12} md={6} key={index}>
            <Project project={project} projectType="app" key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
