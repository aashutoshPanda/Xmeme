import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Thanks for Visiting
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Checkout My Other Projects!
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://github.com/aashutoshPanda">
          github.com/aashutoshPanda
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
