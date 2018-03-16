import React, { Component } from 'react'
import PropTypes from 'prop-types'
import superagent from 'superagent'
import Navbar from './components/Navbar'
import Map from './components/Map'
import VenuesContainer from './containers/VenuesContainer'
//material-ui & styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from './styles/theme'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      venues: []
    }
  }

  static childContextTypes = {
    createMuiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { createMuiTheme }
  }

  componentDidMount() {
    const url = 'https://www.deskbookers.com/nl-nl/explore/ajax.json?q=amsterdam'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.rows
      // console.log(response.body.rows)
      this.setState({
        venues: venues
      })
    })
  }

  render() {
    console.log(this.state.venues)
    return (
      <MuiThemeProvider theme={createMuiTheme}>
        <div className="App">
          <Navbar />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
