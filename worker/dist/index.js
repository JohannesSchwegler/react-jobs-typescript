"use strict";
var CronJob = require("cron").CronJob;
var fetchGitHubSite = require("./tasks/fetch-github");
// fetch github jobs
new CronJob("* * * * *", fetchGitHubSite, null, true, "America/Los_Angeles");
