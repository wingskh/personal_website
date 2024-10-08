import flutterCookbookAppImage from "../../assets/images/projects/Flutter-Cookbook-App.gif";
import flutterExpenseTrackerImage from "../../assets/images/projects/Flutter-Expense-Tracker.gif";
import flutterQuizAppImage from "../../assets/images/projects/Flutter-Quiz-App.gif";
import flutterShoppingListImage from "../../assets/images/projects/Flutter-Shopping-List.gif";
import footballScreenerImage from "../../assets/images/projects/football-screener.png";
import reactCtripImage from "../../assets/images/projects/react_ctrip.gif";
import votingSystemImage from "../../assets/images/projects/Voting-System.gif";
import fypImage from "../../assets/images/projects/FYP.gif";
import fypProfitImage from "../../assets/images/projects/FYP-Profit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum RepoType {
  Github = "Github",
  Gitlab = "Gitlab",
  PDF = "PDF",
}

export const getRepoIcon = (repoType: RepoType) => {
  switch (repoType) {
    case RepoType.Github:
      return <i className="fa fa-github-square" aria-hidden="true" />;
    case RepoType.Gitlab:
      return <i className="fa fa-square-gitlab" aria-hidden="true" />;
    case RepoType.PDF:
      return <FontAwesomeIcon icon="file-pdf" />;
    default:
      return <></>;
  }
};

export interface IProject {
  image: string;
  repoUrl: string;
  repoType: RepoType;
  techniques: string[];
  desc: string;
  title: string;
  supplementImage?: string;
}

export interface IProjects {
  app: IProject[];
  web: IProject[];
  fyp: IProject[];
}

export const projectData: IProjects = {
  fyp: [
    {
      image: fypImage,
      repoUrl:
        "https://www.cse.cuhk.edu.hk/lyu/_media/thesis/report-2005-2.pdf?id=students%3Afyp&cache=cache",
      repoType: RepoType.PDF,
      techniques: ["Machine Learning", "Data Science", "Statistics"],
      desc: "Predicting handicap result of Soccer using betting odds via Machine Learning.\nPositive: Home Team\nNegative: Away Team",
      title: "Prediction for Soccer Handicap(讓球) Result",
      supplementImage: fypProfitImage,
    },
  ],
  app: [
    {
      image: flutterCookbookAppImage,
      repoUrl: "https://github.com/wingskh/Flutter-Cookbook-App",
      repoType: RepoType.Github,
      techniques: ["Flutter", "Riverpod", "Snack Bar", "Drawer"],
      desc: "A simple Flutter Cookbook App.",
      title: "Flutter Cookbook App",
    },
    {
      image: flutterExpenseTrackerImage,
      repoUrl: "https://github.com/wingskh/Flutter-Expense-Tracker",
      repoType: RepoType.Github,
      techniques: [
        "Flutter",
        "Responsive UI",
        "Alert Dialog",
        "Dark Mode",
        "Swipe to delete (Dismissible)",
        "Modal",
      ],
      desc: "A simple Flutter app for tracking the expenses of user.",
      title: "Flutter Expense Tracker",
    },
    {
      image: flutterShoppingListImage,
      repoUrl: "https://github.com/wingskh/Flutter-Shopping-List",
      repoType: RepoType.Github,
      techniques: [
        "Flutter",
        "Restful API with Firebase",
        "Input Validation",
        "Form",
      ],
      desc: "A simple flutter app to fetch and update data stored in online server.",
      title: "Flutter Shopping List",
    },
    {
      image: flutterQuizAppImage,
      repoUrl: "https://github.com/wingskh/Flutter-Quiz-App",
      repoType: RepoType.Github,
      techniques: ["Flutter"],
      desc: "A simple flutter quiz game app for learning flutter.",
      title: "Flutter Quiz App",
    },
  ],
  web: [
    {
      image: footballScreenerImage,
      repoUrl: "https://github.com/wingskh/football-screener",
      repoType: RepoType.Github,
      techniques: [
        "SocketIO (React + Python)",
        "React 18 with Typescript",
        "Flask",
        "Web Scraping",
        "Heroku Dynos",
        "Data Science",
        "Amazon S3",
        "Material UI",
      ],
      desc: "A website to analyse the odds differences between HKJC and other bookmakers",
      title: "Football Screener",
    },
    {
      image: reactCtripImage,
      repoUrl: "https://github.com/wingskh/react_ctrip",
      repoType: RepoType.Github,
      techniques: [
        "Docker",
        "React 18 with Typescript",
        "Redux Toolkit",
        "Axios with middleware",
        "JWT Decryption / Encryption",
        "i18next",
        "Login System",
        "Shopping Cart System",
        "Ant Design",
      ],
      desc: "A demo template for Ctrip",
      title: "React Ctrip",
    },
    {
      image: votingSystemImage,
      repoUrl: "https://github.com/wingskh/Voting-System",
      repoType: RepoType.Github,
      techniques: [
        "MySQL",
        "Redis",
        "Java Spring Boot",
        "Axios with middleware",
        "Docker",
        "React 18 with Typescript",
      ],
      desc: "A website for a team to vote for specific topics simultaneously.",
      title: "Voting System",
    },
  ],
};
