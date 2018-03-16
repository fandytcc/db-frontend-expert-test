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

export const officeShape = PropTypes.shape({
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

class OfficeItem extends PureComponent {
  static propTypes = {
    ...officeShape.isRequired,
  }

  renderPrice(price, key) {
    const priceRange = Object.keys(price).filter(function(key) {
      return price[key] === true ? key : null
    })
    return priceRange[0]
  }

  render() {
    console.log(this.props)
    const { classes } = this.props
    const { _id, name, reviews, price, photos, avgRating  } = this.props
    const reviewCount = reviews.length

    return (
      <div className="office-item">
        <Card className={classes.card} >
          <CardMedia
            className={classes.media}
            image= { photos[0].url }
            title= "Office Item"
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              { name }
            </Typography>
            <Typography component="p">
              { avgRating }
            </Typography>
              { this.renderPrice(price) }
            <Typography component="p">
              { reviewCount } Reviews
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

OfficeItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OfficeItem)
