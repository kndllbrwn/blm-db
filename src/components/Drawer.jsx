import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  listItem: {
    textAlign: "center",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();
  const [drawerState, setDrawerStateOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = () => {
    setDrawerStateOpen(!drawerState);
  };
  const handleCollapse = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className={classes.root}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "white" }} />
      </Button>
      <Drawer
        open={drawerState}
        onClose={() => setDrawerStateOpen(false)}
        onOpen={() => setDrawerStateOpen(true)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[
            { text: "Home", link: "/" },
            { text: "Edit", link: "/edit" },
            { text: "Make an Impact", link: "/impact" },
            { text: "Contributors", link: "/contributors" },
          ].map(({ text, link }, index) =>
              <ListItem button divider className={classes.listItem}>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={link}
                >
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            
          )}
        </List>
      </Drawer>
    </div>
  );
}
