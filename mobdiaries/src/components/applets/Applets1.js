import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import FaceIcon from "@material-ui/icons/Face";

const Styles = styled.div`
  @media screen and (min-width: 1020px) {
    #card {
      margin-left: 400px;
      height: 650px;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 785,
    marginTop: 10,
    height: 560
  },
  media: {
    height: 400,
    paddingTop: "56.25%" // 16:9
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

export default function Applets1() {
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
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          title="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          style={{ marginLeft: 10 }}
        >
          12,904 Likes
        </Typography>
      </Card>
    </Styles>
  );
}
