import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SettingsIcon from "@material-ui/icons/Settings";
import ArchiveIcon from "@material-ui/icons/Archive";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function RightBox() {
  const classes = useStyles();

  return (
    <div className="leftBoxContents">
      <div className={classes.root}>
        <Avatar alt="R" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="leftBoxContents_name">
        <p>Ross Geller</p>
        <SettingsIcon />
      </div>
      <p className="leftBoxContents_designation">scientist</p>
      <ArchiveIcon style={{ color: "green" }} />
      <p className="leftBoxContents_designation">Archive</p>
    </div>
  );
}
