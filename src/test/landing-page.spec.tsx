import { render, screen } from '@testing-library/react';
import { describe, beforeEach, it, expect } from 'vitest';
import Home from '../app/page';

describe('Home Page', () => {
  beforeEach(() => {
    // Render the component before each test
    render(<Home />);
  });
  
  it('should render the Navbar component', () => {
    // Look for the Navbar - depending on how your Navbar is implemented, you might need to adjust this
    const navbar = screen.getByRole('navigation');
    // or alternatively: const navbar = screen.getByTestId('navbar');
    
    expect(navbar).toBeInTheDocument();
  });
}); 