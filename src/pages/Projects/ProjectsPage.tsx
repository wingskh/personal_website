import { SideBar, NavBar, Card } from "../../components";
import "./ProjectsPage.scss";
import { Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Project } from "../../components";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="projectsContainer">
      <Grid container spacing="20px" className="gridContainer">
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Project />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
