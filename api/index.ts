import express, { Request, Response, Application } from "express";

const app : Application= express();
const port = 3001;

var redis = require("redis"),
  client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get("/api/jobs", async (req: Request, res: Response) => {
  const jobs = await getAsync("github");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.send(jobs);
});

app.get("/api/test", async (req: Request, res: Response) => {
  return res.send("geht wieder net");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
