import Enzyme, {shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import React from 'react'
import Ratings from '../../../client/reviews/Ratings'
import home10ApiResponse from '../../fixtures/home10ApiResponse'
const {reviewsWithComments, ratings} = home10ApiResponse

it('should render the ratings list and items', () => {
  const wrapper = shallow(<Ratings ratings={ratings} totalReviews={reviewsWithComments.length}/>)

  expect(wrapper).toMatchSnapshot()
})