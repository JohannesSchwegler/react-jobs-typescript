var CronJob = require("cron").CronJob;

const fetchGitHubSite = require("./tasks/fetch-github");

// fetch github jobs
new CronJob("* * * * *", fetchGitHubSite, null, true, "America/Los_Angeles");
