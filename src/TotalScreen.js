import React from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleSideBar from "./MiddleSideBar";
import RightSideBar from "./RightSideBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    borderRadius: "30px"
  }
}));
export default function TotalScreen({ email }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <LeftSideBar email={email} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <MiddleSideBar />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <RightSideBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
