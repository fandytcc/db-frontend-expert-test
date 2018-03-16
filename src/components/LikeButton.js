import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Heart from '../images/heart.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class LikeButton extends PureComponent {
  constructor() {
    super()

    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const { liked } = this.state

    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          { liked ?
            <span role="img" aria-label="liked">❤️</span> :
            <span role="img" aria-label="not liked">♡</span>
          }
          <span className="copy">
            { liked ?
              <span role="img" aria-label="liked">❤️</span> :
              <span role="img" aria-label="not liked">♡</span>
            }
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
