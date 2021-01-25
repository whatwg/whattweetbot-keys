"use strict";

const config = require("../private-config.json");
const Twitter = require("twitter-lite");
const prompts = require("prompts");

module.exports.cli = async args => {
  console.log(args);

  const client = new Twitter({ consumer_key: config.key, consumer_secret: config.secret });

  const requestToken = await client.getRequestToken("oob");

  const verifierResponse = await prompts({
    type: "text",
    name: "verifier",
    message: `Please navigate to\n\nhttps://api.twitter.com/oauth/authenticate?oauth_token=${requestToken.oauth_token}\n\nauthorize whattweetbot and enter the PIN:`
  });

  const accessToken = await client.getAccessToken({
    oauth_verifier: verifierResponse.verifier,
    oauth_token: requestToken.oauth_token
  });

  console.log("Copy and store oauth_token and oauth_token_secret:");
  console.log(accessToken);
}
