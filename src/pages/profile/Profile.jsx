import "./profile.scss";
import React, { useState, useEffect } from "react";
import { Widget } from "../../components";
import { Grid } from "@mui/material";
import { leetCodeData } from "./mockups";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReactMarkdown from "react-markdown";
import recordFile from "./README.md";
import { marked } from "marked";
import remarkGfm from "remark-gfm";

export const ProfilePage = () => {
  const [recordData, setRecordData] = useState("");
  const [loading, setLoading] = useState(false);

  const leetCodeCards = [
    {
      title: <div style={{ color: "black" }}>Total</div>,
      ratio: (
        <div className="cardSubTitle">
          <div
            style={{
              fontWeight: 600,
              fontSize: "35px",
              color: "rgba(38, 38, 38, 0.75)",
            }}
          >
            {leetCodeData.matchedUser.submitStats.acSubmissionNum[0].count}
          </div>
          /<div>{leetCodeData.allQuestionsCount[0].count}</div>
        </div>
      ),
      icon: <AccountBalanceWalletOutlinedIcon style={{ color: "black" }} />,
    },
    {
      title: <div style={{ color: "rgb(67, 160, 71)" }}>Easy</div>,
      ratio: (
        <div className="cardSubTitle">
          <div
            style={{
              fontWeight: 600,
              fontSize: "35px",
              color: "rgba(38, 38, 38, 0.75)",
            }}
          >
            {leetCodeData.matchedUser.submitStats.acSubmissionNum[1].count}
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
              fontWeight: 600,
              fontSize: "35px",
              color: "rgba(38, 38, 38, 0.75)",
            }}
          >
            {leetCodeData.matchedUser.submitStats.acSubmissionNum[2].count}
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
            {leetCodeData.matchedUser.submitStats.acSubmissionNum[3].count}
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
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(recordFile);
        const data = await response.text();
        setRecordData(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
      setLoading(false);
    };
    fetchData();

    const fetchLeetCodeData = async () => {
      console.log("LeetCode =============================:");
      try {
        const response = await fetch("https://leetcode.wingsun.workers.dev/");
        const data = await response.json();
        console.log(data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    };
    fetchLeetCodeData();
  }, []);

  return (
    <div className="profileContainer">
      {/* <div className="cardContainer">
      </div> */}
      <Grid container spacing={2} className="gridContainer">
        <Grid item xs={12}>
          <div className="sectionTitle">LeetCode</div>
        </Grid>
        {leetCodeCards.map((leetCodeCard) => (
          <Grid item xs={12} sm={6} md={3}>
            <Widget data={leetCodeCard} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <div className="sectionTitle" style={{ marginTop: "20px" }}>
            Finished Questions
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* <section className="cardContainer">
            <article
              style={{ marginLeft: "50px" }}
              dangerouslySetInnerHTML={{ __html: recordData }}
            ></article>
          </section> */}
          <div className="cardContainer">
            <div className="readme">
              <ReactMarkdown
                children={recordData}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
