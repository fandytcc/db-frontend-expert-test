import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//material-ui
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import './Navbar.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 120,
    marginRight: 20,
  },
})

class Navbar extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" className="navbar" style={{boxShadow: 'none'}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <img className="logo-img" src="https://d25z2n9unyzsah.cloudfront.net/2018.5.21-wwwdeskbookerscom/css/images/logo-291x50.svg.gz" alt="deskbookers"/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
            </Typography>
            <Button className="btn btn-responsive" color="inherit">Venues</Button>
            <Button className="btn btn-responsive" color="inherit">Organisations</Button>
            <Button className="btn btn-responsive" color="inherit">Help</Button>
            <Button className="btn" color="inherit">Log In</Button>
            <Button className="btn" variant="raised" color="secondary">Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)
