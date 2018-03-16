import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../components/LikeButton'
import './VenueItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/350x180?text=No%20Image'

export const venueShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  coordinate: PropTypes.array.isRequired,
  image_urls: PropTypes.array,
  address: PropTypes.array,
  price_per_person: PropTypes.bool,
  hour_price: PropTypes.number,
  day_price: PropTypes.number,
  review_count: PropTypes.number,
  rating: PropTypes.number,
})

class VenueItem extends PureComponent {
  static propTypes = {
    ...venueShape.isRequired,
  }

  renderRating() {
    const { rating } = this.props

  }

  render() {
    console.log(this.props)
    const { image_urls, name, rating, review_count, address, hour_price, day_price } = this.props

    return (
      <div className="venue-item">
        <div
          className="venue-cover"
          style={{ backgroundImage:`url(${ image_urls[0] || PLACEHOLDER })`, display:'block', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:280, width:`100%`, zIndex: -1 }} >

          <div className="like-button">
            <LikeButton />
          </div>

          <div id="venue-price">
            <div className="hour-rate">{ hour_price && <h2>${hour_price}/hour</h2>}</div>
            <div className="day-rate"> { day_price && <h4>${day_price} - per person</h4>}</div>
          </div>
        </div>

        <div className="venue-content">
          <div className="venue-name">
            <h2>{ name }</h2>
          </div>

          <div className="venue-info" style={{color: 'grey'}}>
            <h4>{ rating } - { review_count } Reviews - { address.join(', ') }</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default VenueItem
