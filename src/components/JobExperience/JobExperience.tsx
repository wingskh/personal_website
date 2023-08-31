import "./JobExperience.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import moment from "moment";
import { Grid } from "@mui/material";

export const JobExperience = ({ jobExp, isLast, childKey }) => {
  const { subtitle, title, period, learnt = [], logo, desc } = jobExp;
  
  return (
    <div
      style={{
        marginBottom: isLast ? "20px" : "0px",
      }}
      className="JobExperienceContainer"
      key={childKey}
    >
      <div className="top">
        <div className="companyLogoContainer">
          <img className="companyLogo" src={logo} alt={subtitle} />
        </div>
        <div className="jobDetailContainer">
          <div className="jobTitle">{title}</div>
          <div className="companyName">{subtitle}</div>
          <small>{period}</small>
          {desc}
        </div>
      </div>
      {learnt.length > 0 && (
        <div className="bottom">
          {learnt.map((item, index) => {
            return (
              <div className="responsibilitySymbol">
                <code>-&nbsp;</code>
                <code key={index}>{item}</code>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
