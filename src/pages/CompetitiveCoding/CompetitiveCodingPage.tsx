import "./CompetitiveCodingPage.scss";
import React, { useState, useEffect } from "react";
import { Widget } from "../../components";
import { Grid } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReactMarkdown from "react-markdown";
import recordFile from "./record.md";
import remarkGfm from "remark-gfm";
import moment from "moment";
import StarIcon from "@mui/icons-material/Star";
import { ILeetCodeData } from "./type";

export const CompetitiveCodingPage: React.FC = () => {
  const [recordData, setRecordData] = useState<string>("Loading...");
  const getFormattedLeetCodeData = (
    newLeetCodeData: ILeetCodeData | string
  ) => {
    const isSuccessFetch = typeof newLeetCodeData !== "string";
    const fontSize = isSuccessFetch ? "35px" : "25px";

    return [
      {
        title: <div style={{ color: "#f8a937" }}>Reputation</div>,
        ratio: (
          <div className="cardSubTitle" style={{ alignItems: "center" }}>
            <div
              style={{
                fontSize,
                color: "black",
              }}
            >
              {isSuccessFetch
                ? newLeetCodeData.matchedUser.profile.reputation
                : newLeetCodeData}
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
                fontSize,
                color: "rgba(38, 38, 38, 0.75)",
              }}
            >
              {isSuccessFetch
                ? newLeetCodeData.matchedUser.submitStats.acSubmissionNum[0]
                    .count
                : newLeetCodeData}
            </div>
            {isSuccessFetch && (
              <div>/{newLeetCodeData.allQuestionsCount[0].count}</div>
            )}
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
                fontSize,
                color: "rgba(38, 38, 38, 0.75)",
              }}
            >
              {isSuccessFetch
                ? newLeetCodeData.matchedUser.submitStats.acSubmissionNum[1]
                    .count
                : newLeetCodeData}
            </div>
            {isSuccessFetch && (
              <div>/{newLeetCodeData.allQuestionsCount[1].count}</div>
            )}
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
                fontSize,
                color: "rgba(38, 38, 38, 0.75)",
              }}
            >
              {isSuccessFetch
                ? newLeetCodeData.matchedUser.submitStats.acSubmissionNum[2]
                    .count
                : newLeetCodeData}
            </div>
            {isSuccessFetch && (
              <div>/{newLeetCodeData.allQuestionsCount[2].count}</div>
            )}
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
                fontSize,
                color: "rgba(38, 38, 38, 0.75)",
              }}
            >
              {isSuccessFetch
                ? newLeetCodeData.matchedUser.submitStats.acSubmissionNum[3]
                    .count
                : newLeetCodeData}
            </div>
            {isSuccessFetch && (
              <div>/{newLeetCodeData.allQuestionsCount[3].count}</div>
            )}
          </div>
        ),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{ color: "rgb(233, 30, 99)" }}
          />
        ),
      },
    ];
  };
  const [leetCodeData, setLeetCodeData] = useState(
    getFormattedLeetCodeData("Loading...")
  );

  useEffect(() => {
    const handleErrorWhenFetchReadme = async () => {
      const response = await fetch(recordFile);
      const data = await response.text();
      setRecordData(data);
    };

    const fetchData = async () => {
      await fetch("/api/cpReadme")
        .then(async (response) => {
          const data = await response.text();
          if (data.startsWith("<!DOCTYPE html>")) {
            handleErrorWhenFetchReadme();
          } else {
            setRecordData(data);
          }
        })
        .catch(async (e) => {
          console.log("Error when fetch '/api/cpReadme':", e.message);
          handleErrorWhenFetchReadme();
        });
    };
    fetchData();

    const fetchLeetCodeData = async () => {
      await fetch("/api/leetcode")
        .then(async (response) => {
          const newLeetCodeData = await response.json();
          setLeetCodeData(getFormattedLeetCodeData(newLeetCodeData));
        })
        .catch((e) => {
          console.log("Error when fetch '/api/leetcode':", e.message);
          setLeetCodeData(getFormattedLeetCodeData("ERROR"));
        });
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
