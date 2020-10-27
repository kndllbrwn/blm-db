import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "./Drawer"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    position: "absolute",
    right: 0,
  },
  title: {
    flexGrow: 1,
  },
  centerHeader: {
    position: "relative",
    left: "40%",
  },
  navImage: {
    marginLeft: "46px",
    width: "100px",
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#000" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Drawer />
          </IconButton>
          <div className={classes.centerHeader}>
            {/* <img className={classes.navImage} src={pin} /> */}
            <br />
            <span>Black Lives Matter Database</span>
            {/* <br />
            <span>of Phi Beta Sigma Fraternity, Inc</span> */}
          </div>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
