import React from 'react';
import HomeScreen from './HomeScreen';

import renderer from 'react-test-renderer';

const navigationMock = {
	navigate: jest.fn()
};

it('render matche snapshot', () => {
  expect(renderer.create(<HomeScreen navigation={navigationMock}/>)).toMatchSnapshot();
});