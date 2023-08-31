import "./HomePage.scss";
import userIcon from "../../assets/images/icon.jpg";
import leetcodeIcon from "../../assets/images/leetcodeIcon.png";
import Button from "@mui/material/Button";
import { Box, Card, Grid } from "@mui/material";
import { useState, useEffect } from "react";

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
  window.open(url, "_blank")!.focus();
};

export const HomePage: React.FC = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 900);
  useEffect(() => {
    const updateWindowDimensions = () => {
      setSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Grid container spacing="50px" direction="row" className="homeContainer">
      {/* User photo */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: smallScreen ? "center" : "end",
        }}
      >
        <Card className="cardContainer">
          <div className="userInfo">
            <img className="userIcon" src={userIcon} alt="userIcon" />
            <div className="userDescText">
              <h2>Wing Sun</h2>
              <div>Software Engineer, Data Scientist</div>
              <Button className="iconBtn" onClick={() => openUrl("github")}>
                <i className="fa fa-github-square" aria-hidden="true" />
              </Button>
              <Button className="iconBtn" onClick={() => openUrl("linkedin")}>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </Button>
              <Button className="iconBtn" onClick={() => openUrl("leetcode")}>
                <img className="imgBtn" src={leetcodeIcon} alt="" />
              </Button>
            </div>
          </div>
        </Card>
      </Grid>
      {/* Code */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: smallScreen ? "center" : "start",
        }}
      >
        <Card className="cardContainer sloganContainer">
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
      </Grid>
    </Grid>
  );
};
