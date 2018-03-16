import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import VenueItem from './VenueItem'
import { venueShape } from './VenueItem'
//material-ui & styling
import Typography from 'material-ui/Typography'
import './VenuesContainer.css'

class VenuesContainer extends PureComponent {
  static PropTypes = {
    venues: PropTypes.arrayOf(venueShape).isRequired,
  }

  renderVenue(venue, index) {
    return <VenueItem key={index} { ...venue } />
  }

  render() {
    if (!this.props.venues) return null
    const { venues } = this.props

    return (
      <div className="venue-container">
        <div className="top-box">
          <Typography variant="headline" component="h2">
            <strong>{venues.length}</strong> results founds
          </Typography>
        </div>
        <div className="venues-wrap">
          { this.props.venues.map(this.renderVenue) }
        </div>
      </div>
    )
  }
}

export default VenuesContainer
