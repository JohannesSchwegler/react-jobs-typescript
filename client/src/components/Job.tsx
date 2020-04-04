import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

// todo factor these into constants file
const ONE_DAY_MS = 24 * 3600 * 1000;

// returns a date like Fri Jun 14
function getMDY(ts: Date) {
  return ts
    .toDateString()
    .split(" ")
    .slice(0, 3)
    .join(" ");
}

// makeDate takes a TS and returns a date like Fri Jun 14
// if it's today or yesterday, it returns that instead
function makeDate(timestamp: Date) {
  const date = new Date(timestamp);
  const dateStr = getMDY(date);
  const todayStr = getMDY(new Date());
  const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
  if (dateStr === todayStr) {
    return "today";
  } else if (dateStr === yesterdayStr) {
    return "yesterday";
  } else {
    return dateStr;
  }
}


type Job = Readonly<{
  company_logo?: string,
  title?: string,
  company?: string,
  location?: string,
  created_at?: Date
}>


  interface Props {
  job: Job;
  onClick ?: () => void;

}




const Job: React.FC<Props> = function ({ job, onClick }) {
  return (
    <Paper onClick={onClick} className="job ffffffffff">
      <div className="job-img-container">
        <img src={job.company_logo || require("../images/web_developer.png")} />
      </div>
      <div className="flex-align-mid">
        <div className="job-title-location">
          <Typography variant="h6">{job.title}</Typography>
          <Typography variant="h5">{job.company}</Typography>
          <Typography>{job.location}</Typography>

          <Typography>{makeDate(job.created_at || new Date())}</Typography>
        </div>
      </div>
    </Paper>
  );
}


export default Job