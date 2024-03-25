// ... (previous imports and describe block)

describe('Navbar and Routing Integration', () => {
  it('navigates to correct component on link click', () => {
    render(
      <Router>
        <Navbar />
        <Route path="/public-safety">
          <div data-testid="public-safety">Public Safety Component</div>
        </Route>
      </Router>
    );

    fireEvent.click(screen.getByText('Public Safety'));
    const publicSafetyComponent = screen.getByTestId('public-safety');
    expect(publicSafetyComponent).toBeInTheDocument();
  });

  it('handles error when component is not found', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Mock console.error to suppress the expected error
    console.error = jest.fn();

    fireEvent.click(screen.getByText('Invalid Route'));
    expect(console.error).toHaveBeenCalledWith(expect.any(String));
  });
});


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

