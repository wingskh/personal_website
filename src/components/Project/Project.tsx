import "./Project.scss";
import userIcon from "../../assets/images/icon.jpg";

export const Project: React.FC = () => {
  return (
    <div className="projectContainer">
      <img className="projectDemo" src={userIcon} alt="ProjectDemo" />
    </div>
  );
};
