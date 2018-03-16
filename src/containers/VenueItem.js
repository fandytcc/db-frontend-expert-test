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
    boxShadow: 'none',
    margin: 0,
    padding: 0,
  },
  media: {
    width: '125%',
    height: 250,
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
    const { image_urls, name, rating, review_count, address, hour_price, day_price } = this.props

    return (
      <div className="venue-item">
        <Card className={ classes.card }>
          {
            image_urls &&
            <CardMedia
              className={ classes.media }
              image= { image_urls[0] }
              title= "Venue Item"
            />
          }
          <CardContent style={{width: `110%`}}>
            <Typography className="venue-name" variant="title" align="left">
              <strong>{ name }</strong>
            </Typography>
            <div className="venue-info">
              <Typography variant="subheading" color="textSecondary" align="left">
               <strong>{ rating } - { review_count } Reviews - { address }</strong>
              </Typography>
            </div>
            <div className="price">
                <div className="hour-price">${ hour_price }/hour</div>
                <div className="day-price">${ day_price } - per person</div>
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
