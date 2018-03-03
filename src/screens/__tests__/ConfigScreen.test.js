
import React from 'react';
import ConfigScreen from '../ConfigScreen';

import renderer from 'react-test-renderer';

it('render matches snapshot', () => {
  expect(renderer.create(<ConfigScreen />)).toMatchSnapshot();
});

it('updates config value', () => {
	const component = renderer.create(<ConfigScreen />).getInstance();
	component.updateConfigValue(false);
	expect(component.state).toMatchSnapshot();
});
