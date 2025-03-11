import { render } from '@testing-library/react';
import { describe, beforeEach } from 'vitest';
import Home from '../app/page';

describe('Home Page', () => {
  beforeEach(() => {
    // Render the component before each test
    render(<Home />);
  });
}); 