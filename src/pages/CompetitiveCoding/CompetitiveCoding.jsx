import "./competitiveCoding.scss";
import React, { useState, useEffect } from "react";
import { Widget } from "../../components";
import { Grid } from "@mui/material";
import { leetCodeData } from "./mockups";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReactMarkdown from "react-markdown";
import recordFile from "./README.md";
import { marked } from "marked";
import remarkGfm from "remark-gfm";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";
import { defaultLeetCodeData } from "./defaultLeetCodeData";

export const CompetitiveCodingPage = () => {
  const [recordData, setRecordData] = useState("");
  const [leetCodeData, setLeetCodeData] = useState(
    defaultLeetCodeData("Loading...")
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/cpReadme");
        // const response = await fetch('./README.md');

        const data = await response.text();
        setRecordData(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
          const response = await fetch(recordFile);
          const data = await response.text();
          setRecordData(data);
        }
      }
      setLoading(false);
    };
    fetchData();

    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch("/api/leetcode");
        const leetCodeData = await response.json();
        setLeetCodeData([
          {
            title: <div style={{ color: "#f8a937" }}>Reputation</div>,
            ratio: (
              <div className="cardSubTitle" style={{ alignItems: "center" }}>
                <div
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  {leetCodeData.matchedUser.profile.reputation}
                </div>
              </div>
            ),
            icon: <StarIcon style={{ color: "#f8a937" }} />,
          },
          {
            title: <div style={{ color: "black" }}>Total</div>,
            ratio: (
              <div className="cardSubTitle">
                <div
                  style={{
                    fontSize: "35px",
                    color: "rgba(38, 38, 38, 0.75)",
                  }}
                >
                  {
                    leetCodeData.matchedUser.submitStats.acSubmissionNum[0]
                      .count
                  }
                </div>
                /<div>{leetCodeData.allQuestionsCount[0].count}</div>
              </div>
            ),
            icon: (
              <AccountBalanceWalletOutlinedIcon style={{ color: "black" }} />
            ),
          },
          {
            title: <div style={{ color: "rgb(67, 160, 71)" }}>Easy</div>,
            ratio: (
              <div className="cardSubTitle">
                <div
                  style={{
                    fontSize: "35px",
                    color: "rgba(38, 38, 38, 0.75)",
                  }}
                >
                  {
                    leetCodeData.matchedUser.submitStats.acSubmissionNum[1]
                      .count
                  }
                </div>
                /<div>{leetCodeData.allQuestionsCount[1].count}</div>
              </div>
            ),
            icon: (
              <AccountBalanceWalletOutlinedIcon
                style={{ color: "rgb(67, 160, 71)" }}
              />
            ),
          },
          {
            title: <div style={{ color: "rgb(251, 140, 0)" }}>Medium</div>,
            ratio: (
              <div className="cardSubTitle">
                <div
                  style={{
                    fontSize: "35px",
                    color: "rgba(38, 38, 38, 0.75)",
                  }}
                >
                  {
                    leetCodeData.matchedUser.submitStats.acSubmissionNum[2]
                      .count
                  }
                </div>
                /<div>{leetCodeData.allQuestionsCount[2].count}</div>
              </div>
            ),
            icon: (
              <AccountBalanceWalletOutlinedIcon
                style={{ color: "rgb(251, 140, 0)" }}
              />
            ),
          },
          {
            title: <div style={{ color: "rgb(233, 30, 99)" }}>Hard</div>,
            ratio: (
              <div className="cardSubTitle">
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "35px",
                    color: "rgba(38, 38, 38, 0.75)",
                  }}
                >
                  {
                    leetCodeData.matchedUser.submitStats.acSubmissionNum[3]
                      .count
                  }
                </div>
                /<div>{leetCodeData.allQuestionsCount[3].count}</div>
              </div>
            ),
            icon: (
              <AccountBalanceWalletOutlinedIcon
                style={{ color: "rgb(233, 30, 99)" }}
              />
            ),
          },
        ]);
        setLeetCodeData(defaultLeetCodeData())
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
          setLeetCodeData(defaultLeetCodeData("ERROR"));
        }
      }
    };
    fetchLeetCodeData();
  }, []);

  return (
    <Grid container spacing="20px" className="competitiveCodingContainer">
      <Grid item xs={12} className="gridContainer">
        <div
          className="sectionTitle"
          style={{
            marginRight: window.innerWidth >= 800 ? "10px" : "0px",
          }}
        >
          LeetCode
        </div>
        <code className="time">(username: wingskh)</code>
      </Grid>
      {leetCodeData.map((leetCodeCard, index) => (
        <Grid item xs={12} sm={index === 0 ? 12 : 6} md={12 / 5} key={index}>
          <Widget data={leetCodeCard} />
        </Grid>
      ))}
      <Grid
        className="gridContainer"
        item
        xs={12}
        style={{
          // paddingTop: "30px",
          alignItems: "center",
        }}
      >
        <div
          className="sectionTitle"
          style={{
            marginRight: window.innerWidth >= 800 ? "10px" : "0px",
            paddingTop: "0px",
          }}
        >
          Finished Questions
        </div>
        <code className="time">({moment().format("YYYY-MM-DD HH:mm:ss")})</code>
      </Grid>
      <Grid item xs={12}>
        <div className="cardContainer">
          <div className="readme">
            <ReactMarkdown children={recordData} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
