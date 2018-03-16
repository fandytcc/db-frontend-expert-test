import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
//material-ui
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

//style Card
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

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

  render() {
    console.log(this.props)
    const { classes } = this.props
    const { venue } = this.props

    return (
      <div className="venue-item">
        <Card className={classes.card} >
          <CardMedia
            className={classes.media}
            image= { venue.image_urls[0] }
            title= "Venue Item"
          />
          <CardContent>
            <Typography className="venue-name" variant="headline" component="h2">
              { venue.name }
            </Typography>
            <div className="venue-info">
              <Typography component="p">
                { venue.rating }
              </Typography>
              <Typography component="p">
                { venue.review_count } Reviews
              </Typography>
              <Typography component="p">
                { venue.address }
              </Typography>
            </div>
            <div className="price">
              <div className="hour-price">${venue.hour_price}/hour</div>
              <div className="day-price">${venue.day_price} - per person</div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

VenueItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VenueItem)
