import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
//material-ui
// import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

//style Card
const styles = {
  card: {
    maxWidth: 345,
    boxShadow: 'none',
    margin: 0,
    padding: 0,
  },
  media: {
    width: '125%',
    height: 250,
  },
}

const PLACEHOLDER = 'http://via.placeholder.com/350x180?text=No%20Image'

export const venueShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coordinate: PropTypes.array.isRequired,
  image_urls: PropTypes.array,
  address_object: PropTypes.shape({
    address_line1: PropTypes.string.isRequired,
    address_line2: PropTypes.string,
    address_line3: PropTypes.string,
    postalCode: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  price_per_person: PropTypes.bool,
  hour_price: PropTypes.number,
  day_price: PropTypes.number,
  review_count: PropTypes.number,
  rating: PropTypes.number,
  favourite: false,
})

class VenueItem extends PureComponent {
  static propTypes = {
    ...venueShape.isRequired,
  }

  renderRating() {
    
  }

  render() {
    console.log(this.props)
    // const { classes } = this.props
    const { image_urls, name, rating, review_count, address, hour_price, day_price } = this.props

    return (
      <div className="venue-item">
        <div
          className="venue-cover"
          style={{ backgroundImage:`url(${ image_urls[0] || PLACEHOLDER })`, display:'block', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:280, width:`100%`, zIndex: -1 }} >

          <div id="venue-price">
            <div className="hour-rate">{ hour_price && <h2>${hour_price}/hour</h2>}</div>
            <div className="day-rate"> { day_price && <h4>${day_price} - per person</h4>}</div>
          </div>
        </div>

        <div className="venue-content">
          <div className="venue-name">
            <h3>{ name }</h3>
          </div>

          <div className="venue-info">
            <h4>{ rating } - { review_count } Reviews - { address }</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default VenueItem
