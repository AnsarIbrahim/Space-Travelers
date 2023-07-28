import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

describe('Navigation Component', () => {
  it('renders correctly without unexpected changes', () => {
    const navigation = renderer
      .create(
        <Router>
          <Navigation />
        </Router>,
      )
      .toJSON();
    expect(navigation).toMatchSnapshot();
  });

  it('renders all the navigation links', () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    screen.debug();
    const rocketLink = screen.getByText('Rockets');
    const missionLink = screen.getByText('Missions');
    const profileLink = screen.getByText('My Profile');

    expect(rocketLink).toBeInTheDocument();
    expect(missionLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
