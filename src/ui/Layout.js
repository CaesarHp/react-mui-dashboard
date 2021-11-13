import React from "react";

import { Grid } from "@mui/material";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import logo from "../local-img/logo.png";
import promot1 from "../local-img/promot-1.png";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to right bottom, #e3edff, #d1e2ff);",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden",
  },
  container: {
    margin: "3rem 10rem",
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "2rem 1rem",
  },
  logoImg: {
    width: "2rem",
    height: "2rem",
  },
  title: {
    fontWeight: 600,
    marginLeft: "1rem",
  },
  promotContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 1rem",
  },
  promotImg: {
    width: "8rem",
    height: "8rem",
  },
  btn: {
    borderRadius: "5px",
    padding: "0.8rem",
    backgroundColor: "black",
    fontWeight: 500,
    textTransform: "none",
    color: "white",
    marginTop: "1rem",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={1} className={classes.container}>
          <Grid container>
            <Grid item xs={2}>
              <Grid container>
                <Grid item xs={12}>
                  <div className={classes.logoContainer}>
                    <img alt="logo" src={logo} className={classes.logoImg} />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Tech-Fit
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Sidebar />
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.promotContainer}>
                    <img
                      alt="logo"
                      src={promot1}
                      className={classes.promotImg}
                    />
                    <div>
                      <Button
                        variant="contained"
                        disableElevation
                        className={classes.btn}
                      >
                        Upgrade to Pro
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default Layout;
