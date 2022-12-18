import "./profile.scss";
import userIcon from "../../assets/images/icon.jpg";
import leetcodeIcon from "../../assets/images/leetcodeIcon.png";
import Button from "@mui/material/Button";
import { Box, Card, Grid } from "@mui/material";
import { JobExperience } from "../../components";
import { jobExperienceData } from "./jobExperienceData";
import { educationExperienceData } from "./educationExperienceData";
import { honorsAndAwardsData } from "./honorsAndAwardsData";

const openUrl = (urlTyle) => {
  let url;
  switch (urlTyle) {
    case "github":
      url = "https://github.com/wingskh";
      break;
    case "linkedin":
      url = "https://www.linkedin.com/in/ka-ho-sun-8b8897179/";
      break;
    case "leetcode":
      url = "https://leetcode.com/wingskh/";
      break;
    default:
      url = "https://github.com/wingskh";
      break;
  }
  window.open(url, "_blank").focus();
};

export const ProfilePage = () => {
  return (
    <Grid container spacing="20px" direction="row" className="profileContainer">
      <Grid item xs={12} md={4} className="gridContainer">
        <Box className="aboutLeftContainer">
          {/* User photo */}
          <div className="sectionTitle">Education</div>
          <Card className="cardContainer">
            <div className="cardContentContent">
              {educationExperienceData.map((jobExp, index) => (
                <JobExperience
                  jobExp={jobExp}
                  key={index}
                  childKey={index}
                  isLast={index !== educationExperienceData.length - 1}
                />
              ))}
            </div>
          </Card>
          {/* Code */}
          <div className="sectionTitle">Honors & awards</div>
          <Card className="cardContainer">
            <div className="cardContentContent">
              {honorsAndAwardsData.map((jobExp, index) => (
                <JobExperience
                  jobExp={jobExp}
                  key={index}
                  childKey={index}
                  isLast={index !== honorsAndAwardsData.length - 1}
                />
              ))}
            </div>
          </Card>
        </Box>
      </Grid>
      <Grid item xs className="gridContainer">
        {/* Job Experience */}
        <div className="sectionTitle">Job Experience</div>
        <Card
          className="cardContainer"
          style={{
            height: "auto",
            flexGrow: 1,
          }}
        >
          <div className="cardContentContent">
            {jobExperienceData.map((jobExp, index) => (
              <JobExperience jobExp={jobExp} key={index} childKey={index} />
            ))}
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};
