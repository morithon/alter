import React from 'react';
import Divider from './Divider';

import renderer from 'react-test-renderer';

it('render matches snapshot', () => {
  expect(renderer.create(<Divider isSuccess/>)).toMatchSnapshot();
  expect(renderer.create(<Divider isSuccess={false}/>)).toMatchSnapshot();
});