import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "90%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",

      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.3)",
      opacity: 1
    },
    "100%": {
      transform: "scale(1.4)",
      opacity: 0
    }
  }
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 2,
    height: 22,
    border: `1px solid ${theme.palette.background.paper}`
  }
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.6)
    }
  }
}));

export default function BadgeAvatars({ id }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        variant="dot"
      >
        <Avatar
          alt={id}
          src="/static/images/avatar/1.jpg"
          className={classes.Small}
        />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      ></Badge>
    </div>
  );
}
