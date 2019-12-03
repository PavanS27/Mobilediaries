import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./Chat";
import styled from "styled-components";
import Inputfooter from "./Inputfooter"
import { makeStyles } from '@material-ui/core/styles';

const Styles = styled.div`
  .message{
    margin:0px;
    border-bottom-style: dotted;
    border-bottom: 1px rgb(30,144,255);
    padding-bottom: 5px;
  }
  
  .botInput{
    padding: 9px;
    margin-bottom: 13px;
    width: 86%;
    border-radius: 7px;
    outline:none;
    border: 1px solid rgb(255,127,80);
  }
  .user{
    margin: 0px;
    margin-top: 3px;
    color: 	rgb(30,144,255)
    ;
  }
`;

class ChatApplet extends Component {

  render() {
    const { feed, sendMessage } = this.props;
    return (
      <Styles>
      <div >
      
       
          {feed.map(entry => (
           <> 
            <p className="user">{entry.sender}</p>
           <p className="message">{entry.text}</p>
          </>
        ))}
        
        </div>
            <Inputfooter>
            
  
            <input
          className = "botInput"
          placeholder="Say something.."
         type="text"
         onKeyDown={e =>
           e.keyCode === 13 ? sendMessage(e.target.value) : null
         }
       ></input>

            </Inputfooter>
        
     
      <div>
      
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