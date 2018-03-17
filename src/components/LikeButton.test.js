import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(
    <LikeButton
      liked={false}
      onChange={toggleLike}
    />
  )

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('like')
  })

  describe('click it', () => {
    it('toggles the "liked" state', () => {
      expect(button).toHaveState({ liked: false})
      button.find('button').simulate('click')
      expect(button).toHaveState({ liked: true })
    })
  })
})
