import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Jobs from "./components/Jobs";
import "./scss/style.scss";

const mockJobs = [{ title: "SWE1", company: "Google" }];

const JOB_API_URL = '/api/jobs';

async function fetchJobs(updateCb: (a: []) => void) {
 
  const res = await fetch(JOB_API_URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  });


  let json = await res.json();


  updateCb(json);
}


function App() {
  const [jobList, updateJobs] = React.useState([]);

  const [value, setValue] = React.useState<string>("All");

  const [search, setSearch] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    fetchJobs(updateJobs);
   
  }, []);
  console.log(value);

  const filtered = jobList
    .filter((item: {
      title: string,
      location: string
    }) => {

      switch (value.toLowerCase()) {
        case "all":
          return true;

        case "remote":
          return (item.location.toLowerCase() || item.title.toLowerCase()) === "remote";

        case "international":
          console.log(item.title.toLowerCase());
          return (
            !item.location.toLowerCase().includes("remote") ||
            !item.title.toLowerCase().includes("remote")
          );

        case "junior":
          const jobTitle = item.title.toLowerCase();

          if (
            jobTitle.includes("senior") ||
            jobTitle.includes("manager") ||
            jobTitle.includes("sr.") ||
            jobTitle.includes("architect") ||
            jobTitle.includes("director")
          ) {
            return false;
          }
          return true;



        case "senior":
          const title = item.title.toLowerCase();

          if (
            title.includes("senior") ||
            title.includes("manager") ||
            title.includes("sr.") ||
            title.includes("architect") ||
            title.includes("director")
          ) {
            return true;
          }
          return false;

        default:
        // code block
      }
    })
    .filter((job: {
      title: string
    }) => {
      if (search === "") {
        return true;
      } else {
        return job.title.toLowerCase().includes(search.toLowerCase());
      }
    });
  console.log(filtered);
  return (
    <div className="App">
      <Header />
      <div className="jp-container">
        <Sidebar
          search={[search, setSearch]}
          handleChange={handleChange}
          value={value}
        />

        <Jobs jobs={filtered} />
      </div>
    </div>
  );
}

export default App;
