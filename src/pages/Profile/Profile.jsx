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

<Box className="aboutLeftContainer">
  {/* User photo */}
  <Card className="userInfoContainer">
    <div className="userInfo">
      <img className="userIcon" src={userIcon} alt="userIcon" />
      <div className="userDescText">
        <h2>Wing Sun</h2>
        <div>Software Engineer, Data Scientist</div>
        <Button className="iconBtn" onClick={() => openUrl("github")}>
          <i class="fa fa-github-square" aria-hidden="true" />
        </Button>
        <Button className="iconBtn" onClick={() => openUrl("linkedin")}>
          <i class="fa fa-linkedin-square" aria-hidden="true" />
        </Button>
        <Button className="iconBtn" onClick={() => openUrl("leetcode")}>
          <img className="imgBtn" src={leetcodeIcon} alt="" />
        </Button>
      </div>
    </div>
  </Card>
  {/* Code */}
  <Card className="sloganContainer">
    <div className="slogan">
      <code className="sloganCode">
        #include &lt;stdio.h&gt;
        <br />
        <br />
        int main &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;printf("Don't think outside the box.");
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;printf("Think like there is no box");
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;return 0;
        <br />
        &#125;
      </code>
    </div>
  </Card>
</Box>;
