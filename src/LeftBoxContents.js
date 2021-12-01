import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function LeftBox({ email }) {
  const classes = useStyles();
  const name = email.split("@");
  return (
    <div className="leftBoxContents">
      <div className={classes.root}>
        <Avatar alt={name[0]} src="/static/images/avatar/1.jpg" />
      </div>
      <div className="leftBoxContents_name">
        <p>{name[0]}</p>
        <SettingsIcon />
      </div>
      <p className="leftBoxContents_designation">Web Developer</p>
      <FiberManualRecordIcon style={{ color: "green" }} />
      <p className="leftBoxContents_designation">Active</p>
    </div>
  );
}
