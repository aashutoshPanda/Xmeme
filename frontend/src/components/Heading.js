import React from "react";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Heading() {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          XMeme
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Simple Platform to share Memes with your friends.
        </Typography>
      </Container>
    </div>
  );
}

export default Heading;
