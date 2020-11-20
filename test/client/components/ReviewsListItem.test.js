import Enzyme, {shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import React from 'react'
import ReviewsListItem from '../../../client/reviews/ReviewsListItem'
import home10ApiResponse from '../../fixtures/home10ApiResponse'

it('should render the first review', () => {
  const wrapper = shallow(<ReviewsListItem review={home10ApiResponse.reviewsWithComments[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

it('should render the first review that has a comment', () => {
  const firstReviewWithComments = home10ApiResponse.reviewsWithComments.find((review) => review.comments.length > 0)

  const wrapper = shallow(<ReviewsListItem review={firstReviewWithComments} modal={true}/>)
  expect(wrapper).toMatchSnapshot()
})
// home10ApiResponse