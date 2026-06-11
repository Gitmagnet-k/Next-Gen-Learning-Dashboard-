import { render, screen } from '@testing-library/react';
import HeroCard from '../components/HeroCard';

describe('HeroCard', () => {
  it('shows welcome message and stats', () => {
    render(<HeroCard />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome Back Kumkum');
    expect(screen.getByText(/12 Day Streak/)).toBeInTheDocument();
    expect(screen.getByText(/4 Courses/)).toBeInTheDocument();
  });
});
