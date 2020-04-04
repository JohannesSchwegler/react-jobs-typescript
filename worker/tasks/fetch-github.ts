var fetch = require("node-fetch");
var redis = require("redis"),
  client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client); // for async redis operations

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub() {
  console.log("fetching github");

  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  // fetch all pages
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log("got", resultCount, "jobs");
    onPage++;
  }

  console.log("got", allJobs.length, "jobs total");




  // set in redis
  const success = await setAsync("github", JSON.stringify(allJobs));

  console.log({ success });
}

fetchGithub();

module.exports = fetchGithub;
