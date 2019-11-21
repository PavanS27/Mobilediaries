import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./Chat";
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';

const Styles = styled.div`
  .botinput{
    margin-top: 530px;
   position: fixed;
    width: 411px;
    border:none;
    border-top: 1px solid rgb(255,127,80);
    padding:5px;
    outline:none;
    font-size: 20px;
  }
  .message{
    font-size:17px;
    border-bottom:1px solid 	rgb(255,127,80);
    width:100%
    
  }
  
`;

class ChatApplet extends Component {

  render() {
    const { feed, sendMessage } = this.props;
    return (
      <Styles>
      <div >
      
        <ul style={{position:"fixed"}}>
          {feed.map(entry => (
            <div className="message">
          <h5  >{entry.text}</h5>
         
         </div>
          
          ))}
        </ul>
        
      </div>
      <div>
      <input
           className="botinput"
           placeholder="Say something.."
          type="text"
          onKeyDown={e =>
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }
        ></input>
      </div>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(ChatApplet);




/*  <input
           className="botinput"
           placeholder="Say something.."
          type="text"
          onKeyDown={e =>
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }
        ></input> */