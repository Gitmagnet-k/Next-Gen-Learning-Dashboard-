import { render, screen } from '@testing-library/react';
import ActivityCard from '../components/ActivityCard';

describe('ActivityCard', () => {
  it('renders title and 60 activity cells', () => {
    render(<ActivityCard />);

    expect(screen.getByText('Learning Activity')).toBeInTheDocument();

    const cells = document.querySelectorAll('.grid > div');
    // Fallback: count grid children; component renders 60 blocks
    expect(cells.length).toBeGreaterThanOrEqual(60);
  });
});
