"use strict";

const Twitter = require("twitter-lite");
const prompts = require("prompts");

module.exports.cli = async args => {
  console.log(args);

  const response = await prompts({ type: "text", "name": "meh", "message": "How are you?" });
  console.log(response.meh);
}
