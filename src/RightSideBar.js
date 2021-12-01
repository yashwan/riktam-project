import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RightBox from "./ArchivedConversation";
import Button from "@material-ui/core/Button";
import { auth } from "./Firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    height: 160,
    width: 160,
    borderRadius: "20px",
    color: "black",
    backgroundColor: "rgb(179, 212, 202)"
  },
  paper1: {
    padding: theme.spacing(1),
    height: 160,
    width: 230,
    borderRadius: "20px",
    color: "black",
    backgroundColor: "rgb(179, 212, 202)"
  }
}));
export default function RightSideBar() {
  const classes = useStyles();
  return (
    <div className="RightSideBar">
      <div className="LeftSideBar_left_middle" style={{ marginTop: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <RightBox />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper1}>
              <div className="rd">
                <div className="rdt">
                  <h1 className="rdt1" style={{ color: "blue" }}>
                    13H
                  </h1>

                  <h1 className="rdt2" style={{ color: "green" }}>
                    188
                  </h1>
                </div>
                <div className="rdt">
                  <span className="rdt1s" style={{ color: "blue" }}>
                    {" "}
                    Time
                  </span>
                  <span className="rdt2s" style={{ color: "green" }}>
                    {" "}
                    Attended
                  </span>
                </div>
                <div className="rdb">
                  <h1 className="rdt1" style={{ color: "black" }}>
                    119
                  </h1>

                  <h1 className="rdt2" style={{ color: "red" }}>
                    44
                  </h1>
                </div>
                <div className="rdt">
                  <span className="rdt1s" style={{ color: "black" }}>
                    {" "}
                    Meetings
                  </span>
                  <span className="rdt2s" style={{ color: "red" }}>
                    {" "}
                    Rejected
                  </span>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            marginRight: "10px"
          }}
        >
          Copy link
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "10px", marginTop: "10px" }}
          onClick={() => auth.signOut()}
        >
          SignOut
        </Button>
      </div>
    </div>
  );
}
