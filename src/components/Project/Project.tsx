import "./Project.scss";
import { IProject, getRepoIcon } from "../../pages/Projects/projectData";
import { Button, Divider } from "@mui/material";
import { openUrl } from "../../utils/general";
import { ImageModal } from "../";
import { useState } from "react";

type ProjectType = "web" | "app";

export const Project: React.FC<{
  project: IProject;
  projectType: ProjectType;
}> = ({ project, projectType }) => {
  const { image, repoUrl, repoType, techniques, desc, title } = project;
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const handleImageClick = () => {
    console.log("handleImageClick");
    setIsOpenedModal(true);
  };

  const handleModelClose = () => {
    console.log("handleModelClose");
    setIsOpenedModal(false);
  };

  return (
    <div>
      {isOpenedModal && <ImageModal onClose={handleModelClose} image={image} />}

      <div className="projectContainer">
        {/* <img className="projectDemo" src={userIcon} alt="ProjectDemo" /> */}
        <Button className="projectContainerItem" onClick={handleImageClick}>
          <img
            className="projectDemoImage"
            style={{ objectFit: projectType === "web" ? "fill" : "contain" }}
            src={image}
            alt="ProjectDemo"
          />
        </Button>
        <div className="projectContainerItem">
          <div className="projectTitle">{title}</div>
          <span className="projectDesc">{desc}</span>
          <Divider
            variant="fullWidth"
            sx={{
              width: "100%",
              margin: "10px 0px",
            }}
          />
          <span>Used Techniques:</span>
          <ul className="projectTech">
            {techniques.map((tech, index) => (
              <li>{tech}</li>
            ))}
          </ul>
          <Button className="projectRepo" onClick={() => openUrl(repoUrl)}>
            {getRepoIcon(repoType)}
          </Button>
        </div>
      </div>
    </div>
  );
};
