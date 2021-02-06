import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CreateIcon from "@material-ui/icons/Create";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <CreateIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Ashutosh Panda
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
