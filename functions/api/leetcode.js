/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const leetCodeApiCall = async () => {
  let myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");

  const apiBody = [
    {
      operationName: "getUserProfile",
      query:
        "query getUserProfile($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n    __typename\n  }\n  matchedUser(username: $username) {\n    username\n    socialAccounts\n    githubUrl\n    contributions {\n      points\n      questionCount\n      testcaseCount\n      __typename\n    }\n    profile {\n      realName\n      websites\n      countryName\n      skillTags\n      company\n      school\n      starRating\n      aboutMe\n      userAvatar\n      reputation\n      ranking\n      __typename\n    }\n    submissionCalendar\n    submitStats: submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      __typename\n    }\n    badges {\n      id\n      displayName\n      icon\n      creationDate\n      medal {\n        slug\n        config {\n          icon\n          iconGif\n          iconGifBackground\n          iconWearing\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    upcomingBadges {\n      name\n      icon\n      __typename\n    }\n    activeBadge {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n",
    },
    {
      operationName: "getContestRankingData",
      query:
        "query getContestRankingData($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    __typename\n  }\n  userContestRankingHistory(username: $username) {\n    contest {\n      title\n      startTime\n      __typename\n    }\n    rating\n    ranking\n    __typename\n  }\n}\n",
    },
  ];

  let unresolvedPromises = apiBody.map(async (body) => {
    let raw = JSON.stringify({
      operationName: body.operationName,
      variables: {
        username: "wingskh",
      },
      query: body.query,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://leetcode.com/graphql",
      requestOptions
    );
    return (await response.json())["data"];
  });

  const results = await Promise.all(unresolvedPromises);
  return results.reduce((k, v) => Object.assign(k, v), {});
};

// export default {
//   async fetch() {
//     const data = await leetCodeApiCall();
//     console.log(data);
//     const json = JSON.stringify(data, null, 2);
//     return new Response(json, {
//       headers: {
//         "content-type": "application/json;charset=UTF-8",
//       },
//     });
//   },
// };

export const onRequest = async () => {
  const data = await leetCodeApiCall();
  console.log(data);
  const json = JSON.stringify(data, null, 2);
  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
};
