const fetch = require("node-fetch");
let payload = {
  prop1: "val1"
};
exports.handler = async evt => {
  let response = await fetch(
    "https://buptuao3b2.execute-api.us-east-1.amazonaws.com/Prod/hotel",
    {
      method: "POST",
      body: JSON.stringify(evt)
    }
  );

  // get the response as json
  let json = await response.json();

  return json;
};

// make request
