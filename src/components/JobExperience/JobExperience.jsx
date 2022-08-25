import "./jobExperience.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import moment from "moment";
import { Grid } from "@mui/material";

export const JobExperience = ({ jobExp, style }) => {
  const { company, title, period, learnt, logo } = jobExp;

  return (
    <div style={style} className="JobExperienceContainer">
      <div className="top">
        <div className="companyLogoContainer">
          <img className="companyLogo" src={logo} alt={company} />
        </div>
        <div className="jobDetailContainer">
          <div className="jobTitle">{title}</div>
          <div className="companyName">{company}</div>
          <small>{period}</small>
        </div>
      </div>
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
    </div>
  );
};
