import React from 'react'
import Applets1 from '../applets/Applets1';
import Applets2 from '../applets/Applets2';
import Leaderboard from "../Leaderboard"
import styled from "styled-components";


const Styles = styled.div`
  .leaderboard{
      width: 33%;
      margin-left: 1250px;
      position: fixed;
      margin-top: -1100px;
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
           
        </div>
        </Styles>
    )
}

export default Eventpage