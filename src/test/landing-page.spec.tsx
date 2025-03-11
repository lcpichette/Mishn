import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import Home from '../app/page';

// Mock the Next.js Image component since it's not fully compatible with the testing environment
vi.mock('next/image', () => ({
  default: (props: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    'aria-hidden'?: boolean;
  }) => (
    <img 
      src={props.src} 
      alt={props.alt} 
      width={props.width} 
      height={props.height}
      className={props.className}
      data-testid="mock-image"
    />
  ),
}));

describe('Home Page', () => {
  beforeEach(() => {
    // Render the component before each test
    render(<Home />);
  });

  it('renders the Next.js logo', () => {
    const logoElement = screen.getAllByTestId('mock-image')[0];
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/next.svg');
    expect(logoElement).toHaveAttribute('alt', 'Next.js logo');
  });

  it('renders the getting started instructions', () => {
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/app\/page.tsx/i)).toBeInTheDocument();
    expect(screen.getByText(/Save and see your changes instantly./i)).toBeInTheDocument();
  });

  it('renders the deploy now button', () => {
    const deployLink = screen.getByText(/Deploy now/i).closest('a');
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute('href', 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(deployLink).toHaveAttribute('target', '_blank');
    expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the documentation link', () => {
    const docsLink = screen.getByText(/Read our docs/i).closest('a');
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute('href', 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    expect(docsLink).toHaveAttribute('target', '_blank');
    expect(docsLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the footer links', () => {
    // Learn link
    const learnLink = screen.getByText(/Learn/i).closest('a');
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute('href', 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    
    // Examples link
    const examplesLink = screen.getByText(/Examples/i).closest('a');
    expect(examplesLink).toBeInTheDocument();
    expect(examplesLink).toHaveAttribute('href', 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
    
    // Next.js link
    const nextjsLink = screen.getByText(/Go to nextjs.org →/i).closest('a');
    expect(nextjsLink).toBeInTheDocument();
    expect(nextjsLink).toHaveAttribute('href', 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app');
  });

  it('renders the correct number of images', () => {
    const images = screen.getAllByTestId('mock-image');
    expect(images.length).toBe(5); // Next.js logo, Vercel logo, and 3 footer icons
  });
}); 