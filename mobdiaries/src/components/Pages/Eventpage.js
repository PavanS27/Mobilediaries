import React from "react";
import Applets1 from "../applets/Applets1";
import Applets2 from "../applets/Applets2";
import Leaderboard from "../Leaderboard";
import styled from "styled-components";
import Sound from "../sound/Sound";

const Styles = styled.div`
  .leaderboard {
    width: 33%;
    margin-left: 990px;
    position: fixed;
    margin-top: -1100px;
  }
  .music {
    width: 13%;
    margin-left: 990px;
    margin-top: -700px;
    position: fixed;
  }
`;

const Eventpage = () => {
  return (
    <Styles>
      <div>
        <Applets1 />
        <Applets2 />
        <div className="leaderboard">
          <h3>Leaderboard:</h3>
          <Leaderboard />
        </div>
        <div className="music">
          <Sound />
        </div>
      </div>
    </Styles>
  );
};

export default Eventpage;
