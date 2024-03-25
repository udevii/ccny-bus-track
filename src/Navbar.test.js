import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar Component Unit', () => {
  it('renders the Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  it('navigates to correct route on link click', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    fireEvent.click(screen.getByText('Public Safety'));
    expect(window.location.pathname).toBe('/public-safety');

    fireEvent.click(screen.getByText('Login/Signup'));
    expect(window.location.pathname).toBe('/login-signup');
  });

  it('handles invalid link click', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Mock console.error to suppress the expected error
    console.error = jest.fn();

    fireEvent.click(screen.getByText('Invalid Link'));
    expect(console.error).toHaveBeenCalledWith(expect.any(String));
  });
});

