export interface ILeetCodeData {
  allQuestionsCount: AllQuestionsCount[];
  matchedUser: MatchedUser;
}

export interface AllQuestionsCount {
  difficulty: string;
  count: number;
  __typename: Typename;
  submissions?: number;
}

export enum Typename {
  QuestionCountByDifficultyNode = "QuestionCountByDifficultyNode",
  SubmissionCountNode = "SubmissionCountNode",
}

export interface MatchedUser {
  username: string;
  socialAccounts: string[];
  githubUrl: string;
  contributions: Contributions;
  profile: Profile;
  submissionCalendar: string;
  submitStats: SubmitStats;
  badges: Badge[];
  upcomingBadges: UpcomingBadge[];
  activeBadge: ActiveBadge;
  __typename: string;
}

export interface ActiveBadge {
  id: string;
  __typename: string;
}

export interface Badge {
  id: string;
  displayName: string;
  icon: string;
  creationDate: Date;
  medal: Medal;
  __typename: string;
}

export interface Medal {
  slug: string;
  config: Config;
  __typename: string;
}

export interface Config {
  icon: string;
  iconGif: string;
  iconGifBackground: string;
  iconWearing: string;
  __typename: string;
}

export interface Contributions {
  points: number;
  questionCount: number;
  testcaseCount: number;
  __typename: string;
}

export interface Profile {
  realName: string;
  websites: string[];
  countryName: null;
  skillTags: any[];
  company: null;
  school: null;
  starRating: number;
  aboutMe: string;
  userAvatar: string;
  reputation: number;
  ranking: number;
  __typename: string;
}

export interface SubmitStats {
  acSubmissionNum: AllQuestionsCount[];
  totalSubmissionNum: AllQuestionsCount[];
  __typename: string;
}

export interface UpcomingBadge {
  name: string;
  icon: string;
  __typename: string;
}
