import { mount } from 'enzyme'
import React from 'react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { UniversalHeader } from '.'

expect.extend(toHaveNoViolations)

describe('Universal Header', () => {
  it('should render the nav links and the collapsable list button', async () => {
    const wrapper = mount(<UniversalHeader />)
    expect(wrapper.find('.UniversalHeader--link').length).toEqual(2)
    expect(wrapper.find('.UniversalHeader--collapsablebutton').length).toEqual(
      1,
    )
    expect(wrapper.find('.UniversalHeader--navlist').length).toEqual(0)
  })

  it('should open the nav list when the button is clicked', async () => {
    const wrapper = mount(<UniversalHeader />)
    wrapper.find('.UniversalHeader--collapsablebutton').simulate('click')
    expect(wrapper.find('.UniversalHeader--navlist').length).toEqual(1)
  })
})
