import React from 'react';
import ValueDisplay from './ValueDisplay';

import renderer from 'react-test-renderer';

it('render matches snapshot', () => {
  expect(renderer.create(<ValueDisplay mode={'displayValues'} value={'testValue'}/>)).toMatchSnapshot();
  expect(renderer.create(<ValueDisplay mode={'waitForTouch'} focusOn={true}/>)).toMatchSnapshot();
  expect(renderer.create(<ValueDisplay mode={'waitForTouch'} focusOn={false}/>)).toMatchSnapshot();
});