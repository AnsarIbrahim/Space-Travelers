import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile/MyProfile';
import store from '../redux/store';

it('renders correctly', () => {
  const profile = renderer
    .create(
      <Provider store={store}><MyProfile /></Provider>,
    )
    .toJSON();
  expect(profile).toMatchSnapshot();
});
