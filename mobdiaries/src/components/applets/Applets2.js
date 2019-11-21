import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FaceIcon from "@material-ui/icons/Face";
import pic1 from "../images/image1.jpeg";

const Styles = styled.div`
  @media screen and (min-width: 1020px) {
    #card {
      margin-left: 400px;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 785,
    marginTop: 10,
    height: 600
  },
  media: {
    height: 400,
    paddingTop: "56.25%",
    width: "100%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Applets2() {
  const classes = useStyles();

  return (
    <Styles>
      <Card className={classes.card} id="card">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <FaceIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="DiariesBot"
          subheader="November 21, 2019"
        />
        <CardMedia className={classes.media} image='https://scontent.fblr2-1.fna.fbcdn.net/v/t31.0-8/s960x960/23275432_1634874493235965_4058912060387927905_o.jpg?_nc_cat=110&_nc_oc=AQk_k1GB79J6CYqz3bc1pd2EVy-Sr5GP5ctowrD44MpEFOkHZ8Qx2YRJhcj2w2WQltc&_nc_ht=scontent.fblr2-1.fna&oh=6f15bda4793e94de68caef18ede9ab55&oe=5E540549' title="Paella dish" />
        
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
       
      </Card>
    </Styles>
  );
}
