import "./Project.scss";
import { IProject, getRepoIcon } from "../../pages/Projects/projectData";
import { Button, Divider, CircularProgress } from "@mui/material";
import { openUrl } from "../../utils/general";
import { ImageModal } from "../";
import { useState } from "react";

type ProjectType = "web" | "app";

export const Project: React.FC<{
  project: IProject;
  projectType: ProjectType;
}> = ({ project, projectType }) => {
  const { image, repoUrl, repoType, techniques, desc, title, supplementImage } =
    project;
  const [isOpenedDemoModal, setIsOpenedDemoModal] = useState(false);
  const [isOpenedSupplementModal, setIsOpenedSupplementModal] = useState(false);
  const [isSupplementImageLoading, setIsSupplementImageLoading] =
    useState(true);

  const [isDemoImageLoading, setIsDemoImageLoading] = useState(true);

  const handleDemoModalClick = () => {
    setIsOpenedDemoModal(true);
  };

  const handleDemoModalClose = () => {
    setIsOpenedDemoModal(false);
  };

  const handleSupplementModalClick = () => {
    setIsOpenedSupplementModal(true);
  };

  const handleSupplementModalClose = () => {
    setIsOpenedSupplementModal(false);
  };

  const handleDemoImageLoad = () => {
    setIsDemoImageLoading(false);
  };

  const handleSupplementImageLoad = () => {
    setIsSupplementImageLoading(false);
  };

  return (
    <div>
      {isOpenedDemoModal && (
        <ImageModal onClose={handleDemoModalClose} image={image} />
      )}
      {supplementImage && isOpenedSupplementModal && (
        <ImageModal
          onClose={handleSupplementModalClose}
          image={supplementImage}
        />
      )}

      <div className="projectContainer">
        <Button
          className="projectContainerItem"
          onClick={handleDemoModalClick}
          style={{ display: isDemoImageLoading ? "none" : "block" }}
        >
          <img
            className="projectDemoImage"
            style={{ objectFit: projectType === "web" ? "fill" : "contain" }}
            src={image}
            onLoad={handleDemoImageLoad}
            alt="ProjectDemo"
          />
        </Button>
        {isDemoImageLoading && (
          <div className="projectContainerItem loadingProgress">
            <CircularProgress />
          </div>
        )}
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
          <div className="projectSubtitle">Used Techniques:</div>
          <ul className="projectTech">
            {techniques.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          {supplementImage && (
            <div className="projectSupplementContainer">
              <Button
                className="projectContainerItem projectDemoImage"
                onClick={handleSupplementModalClick}
                style={{ display: isSupplementImageLoading ? "none" : "block" }}
              >
                <img
                  className="projectDemoImage"
                  style={{ objectFit: "contain" }}
                  src={supplementImage}
                  onLoad={handleSupplementImageLoad}
                  alt="ProjectSupplementImage"
                />
              </Button>
              {isSupplementImageLoading && (
                <div className="projectContainerItem loadingProgress">
                  <CircularProgress />
                </div>
              )}
            </div>
          )}
          <Button className="projectRepo" onClick={() => openUrl(repoUrl)}>
            {getRepoIcon(repoType)}
          </Button>
        </div>
      </div>
    </div>
  );
};
