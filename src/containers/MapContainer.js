import React, { PureComponent } from 'react'
import { Marker } from 'react-google-maps'
import { MyMapComponent } from '../components/Map'

class MapContainer extends PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    console.log(this.props)
    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.coordinate[0],
          lng: venue.coordinate[1]
        },
        label: venue.name
      }

      return <Marker key={i} {...marker} onClick={this.props.onMarkerClick} />
    })

    return (
      <div className="map-container">
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          markers={markers}
        />
      </div>
    )
  }
}

export default MapContainer
