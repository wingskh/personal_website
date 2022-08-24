import "./home.scss";
import userIcon from "../../assets/images/icon.jpg";
import leetcodeIcon from "../../assets/images/leetcodeIcon.png";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

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

export const HomePage = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={10} className="gridContainer">
        <Grid item xs={12} sm={6} md={6}>
          <div className="cardContainer">
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
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div
            className="cardContainer"
            style={{
              color: "#00ff00",
              height: "100%",
              // width: "85%",
              // padding: "20px",
              backgroundColor: "black",
            }}
          >
            <div className="sloganContainer">
              <div className="slogan">
                <code className="sloganCode">
                  #include &lt;stdio.h&gt;
                  <br />
                  <br />
                  int main &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;printf("Don't think outside the
                  box.");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;printf("Think like there is no box");
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  <br />
                  &#125;
                </code>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
