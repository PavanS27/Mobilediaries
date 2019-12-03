import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { connect } from "react-redux";
import { sendMessage } from "./Chat";


const useStyles = makeStyles(theme => ({
  appBar1: {
    position: "relative",
    
   
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "	rgb(255,127,80)"
  },
  grow: {
    flexGrow: 1
  },
 
  
}));


export default function Inputfooter(props) {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
         {props.children}
        </Toolbar>
      </AppBar>
      
    </React.Fragment>
  );
}



/*    <a href="https://forms.gle/khQ5BShej2utw7nn8">
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
              id="fabi"
            >
              <AddIcon></AddIcon>
            </Fab>
          </a>*/