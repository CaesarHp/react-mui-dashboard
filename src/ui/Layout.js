import React from "react";

import { Grid } from "@mui/material";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right bottom, #e3edff, #d1e2ff);",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid></Grid>
          <Grid item>{children}</Grid>
        </Grid>
      </div>
    </>
  );
}

export default Layout;
