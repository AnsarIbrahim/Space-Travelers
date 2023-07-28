import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets/Rockets';
import Rocket from '../components/Rockets/Rocket';
import store from '../redux/store';

import '@testing-library/jest-dom';

describe('Rockets', () => {
  it('renders correctly', () => {
    const rockets = renderer
      .create(
        <Provider store={store}><Rockets /></Provider>,
      )
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });

  it('render Rocket', () => {
    render(<Provider store={store}><Rocket /></Provider>);
    screen.debug();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
    // interact with element
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('perform the click event', () => {
    render(<Provider store={store}><Rocket /></Provider>);
    const rockets = [
      {
        reserved: true,
        rocketName: 'Friedrich Schiller',
        description: 'happiness',
      },
      {
        reserved: true,
        rocketName: 'Friedrich Schiller',
        description: 'happiness',
      },
      {
        reserved: true,
        rocketName: 'Friedrich Schiller',
        description: 'happiness',
      },
    ];
    rockets.map((rocket) => (
      <Rocket
        key={rocket.name}
        reserved={rocket.reserved}
        rocketName={rocket.name}
        description={rocket.description}
      />
    ));
    screen.debug();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
});
