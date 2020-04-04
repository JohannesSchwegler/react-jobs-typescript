import React from "react";


const Header = () => {
  return (
    <header className="jp-header">
      <img className="jp-header-left" src={require("../images/team_work.png")} />
      <h1>Looking for new opportunities? Apply now! </h1>

      <img src={require("../images/web_developer.png")} />
    </header>
  );
};

export default Header;
