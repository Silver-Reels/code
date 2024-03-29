import fetch from "node-fetch";

let leetcodeQuery=
{
  "query": "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
  "variables":{"username": "Silver-Reels"},
  "operationName": "skillStats"
};
  const init={
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(leetcodeQuery)
};

export const handler= async (event,context)=>{
  try{
    
    const response = await fetch(`https://leetcode.com/graphql/`,init);
    const data = await response.json();
    
    return {statusCode:200,body:JSON.stringify({data})};
  }
  catch (e){
    return {statusCode:500,body:JSON.stringify({error:e})};
  }
};
/////////////////////////////////////////////////////////////
/* RANK
{
  "query": "query userPublicProfile($username: String!) {matchedUser(username: $username) {profile{ranking}}}",
  "variables": {
      "username": "Silver-Reels"
  },
  "operationName": "userPublicProfile"
}
*/