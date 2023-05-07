import fetch from "node-fetch";

/*
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
*/

export const handler= async (event,context)=>{
  try{
    
    let eventBody=event.body;
    const response = await fetch(`https://leetcode.com/graphql/`,{method:"PUT",headers:{'Content-Type':'application/json'},body:eventBody});
    const data = await response.json();

    return { statusCode: 200, body: JSON.stringify({data}) };
  }
  catch (e){
    console.warn(`Could not get data from Leetcode. ${e}`);
    return {statusCode:500,body:JSON.stringify({error:'Failed fetching data'})};
  }
};
