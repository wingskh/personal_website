import "./home.scss";
import userIcon from "../../assets/images/icon.jpg";
import Button from "@mui/material/Button";

const openUrl = (urlTyle) => {
  let url;
  switch (urlTyle) {
    case "github":
      url = "https://github.com/wingskh";
      break;
    case "linkedin":
      url = "https://www.linkedin.com/in/ka-ho-sun-8b8897179/";
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
      <div className="cardContainer">
        <img className="userIcon" src={userIcon} alt="userIcon" />
        <div className="userDescText">
          <h2>Wing Sun</h2>
          <div>Software Engineer, Data Scientist</div>
          <Button className="logoBtn" onClick={() => openUrl("github")}>
            <i class="fa fa-github-square" aria-hidden="true" />
          </Button>
          <Button className="logoBtn" onClick={() => openUrl("linkedin")}>
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </Button>
        </div>
      </div>
      <div
        className="cardContainer"
        style={{
          color: "#00ff00",
          height: "auto",
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
              &nbsp;&nbsp;&nbsp;&nbsp;printf("Don't think outside the box.");
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
    </div>
  );
};
