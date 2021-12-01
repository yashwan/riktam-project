import React, { useState } from "react";
import ForumIcon from "@material-ui/icons/Forum";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LeftBox from "./LeftBoxContents";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import BadgeAvatars from "./ActiveConversation";
import { useHistory, useParams } from "react-router-dom";
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
    backgroundColor: "rgba(123, 228, 91, 0.815)"
  }
}));
export default function LeftSideBar({ email }) {
  const classes = useStyles();
  const history = useHistory();

  const data = [
    {
      id: "1",
      name: "Ross",
      Email: "Ross@scientist"
    },
    {
      id: "2",
      name: "Chandler",
      Email: "Chandler@accounts"
    },
    {
      id: "3",
      name: "Joey",
      Email: "Joey@actor"
    },
    {
      id: "4",
      name: "Phebes",
      Email: "Phebes@mother"
    },
    {
      id: "5",
      name: "Rachel",
      Email: "Rachel@fashion"
    },
    {
      id: "6",
      name: "Monica",
      Email: "Monica@chef"
    }
  ];
  const [drop, setDrop] = useState(0);

  return (
    <div className="LeftSideBar">
      <div className="LeftSideBar_left">
        <ForumIcon style={{ color: "blue" }} />
        <h4>QuickChat</h4>
      </div>
      <div className="LeftSideBar_left_middle">
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <LeftBox email={email} />
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="Active">
        <div className="Active_conversation">
          <h4> Active Conversations</h4>
          {drop ? (
            <ArrowDropDownIcon onClick={() => setDrop(false)} />
          ) : (
            <ArrowDropUpIcon onClick={() => setDrop(true)} />
          )}
        </div>
        <div className={drop ? "acn" : "ac"}>
          {data.map((d) => (
            <div className="Active_conversation_chat">
              <BadgeAvatars id={d.name} />
              <h5 onlick={() => history.push(`/MiddleScreen/${d.name}`)}>
                {d.name}
              </h5>
            </div>
          ))}
        </div>
        <div className="Active_conversation">
          <h4> Archive Conversations</h4>
          <ArrowDropDownIcon onClick={() => setDrop(true)} />
        </div>
      </div>
    </div>
  );
}
