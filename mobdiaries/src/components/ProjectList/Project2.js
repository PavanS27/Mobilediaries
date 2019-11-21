import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
  pos1: {
      marginBottom: 10,
  }
});

export default function Project1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Command Line Pokegame Simulator
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Varun K J
        </Typography>
        <Typography className={classes.pos1} color="textSecondary">
           3rd Sem CSE
        </Typography>
        <Typography variant="body2" component="p">
          A Python based Pokemon simulator that allows battle and capture functionality.
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/ShhhBaby/PokeGame"  ><Button size="small">GitHub Link</Button></a>
      </CardActions>
    </Card>
  );
}

