import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";

import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import ChatApplet from "../chatbot/ChatApplet"
import FaceIcon from "@material-ui/icons/Face";

const Styles = styled.div`
  @media screen and (min-width: 420px) {
    #fabi {
      position: absolute;
      z-index: 1;
      top: -30;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  appBar1: {
    position: "relative",
    backgroundColor: "	rgb(255,127,80)",
   
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -50,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: 80,
    height: 80
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <a href="https://forms.gle/khQ5BShej2utw7nn8">
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
              id="fabi"
            >
              <AddIcon></AddIcon>
            </Fab>
          </a>
          <div className={classes.grow} />

          <IconButton color="inherit" onClick={handleClickOpen}>
            <ChatIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar1}>
          <Toolbar>
          <Avatar aria-label="recipe" className={classes.avatar} src="https://miro.medium.com/max/800/0*oz2e-hQtsHOWzoB4.">
              <FaceIcon />
            </Avatar>
            
            <Typography variant="h6" style={{ fontFamily: "'Slabo 27px', serif"}} className={classes.title}>
              DiariesBOT
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              
            >
              <CloseIcon style={{marginRight: -100}} />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleClose} ></Button>
          </Toolbar>
          
        </AppBar>
        <ChatApplet/>
      </Dialog>
    </React.Fragment>
  );
}
