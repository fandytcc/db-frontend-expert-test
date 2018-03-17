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
    const star = Math.round(rating/2)

    switch (star) {
      case 1:
        return '⭐✩✩✩✩'
      case 2:
        return '⭐⭐✩✩✩'
      case 3:
        return '⭐⭐⭐✩✩'
      case 4:
        return '⭐⭐⭐⭐✩'
      case 5:
        return '⭐⭐⭐⭐⭐'
      default:
        return '✩✩✩✩✩'
    }
  }

  render() {
    const { image_urls, name, review_count, address, hour_price, day_price } = this.props

    return (
      <div className="venue-item">
        <div
          className="venue-cover"
          style={{ backgroundImage:`url(${ image_urls[0] || PLACEHOLDER })` }} >

          <div className="like-button">
            <LikeButton />
          </div>

          <div id="venue-price">
            <div className="hour-rate">{ hour_price && <h2>{hour_price}/hour</h2>}</div>
            <div className="day-rate">
              <h4>{ day_price ? `${day_price} - per person` : 'per person' }</h4></div>
          </div>
        </div>

        <div className="venue-content">
          <div className="venue-name">
            <h2>{ name }</h2>
          </div>

          <div className="venue-info" style={{color: 'grey'}}>
            <h4><span className="rating">{ this.renderRating() }</span> - { review_count } Reviews - { address.join(', ') }</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default VenueItem
