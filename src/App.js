import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import Map from './components/Map'
import OfficesContainer from './containers/OfficesContainer'
//styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from './styles/theme'
import './App.css'

class App extends Component {

  static childContextTypes = {
    createMuiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { createMuiTheme }
  }

  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme}>
        <div className="App">
          <Navbar />
          <p className="App-intro">
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
