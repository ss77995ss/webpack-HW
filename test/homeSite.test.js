import React from 'react';
import { shallow } from 'enzyme';
import HomeSite from '../src/client/homeSite';

describe('<HomeSite />', () => {
  const wrapper = shallow(<HomeSite />);
  describe('When website is built', () => {
    it('should have div', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });
});
