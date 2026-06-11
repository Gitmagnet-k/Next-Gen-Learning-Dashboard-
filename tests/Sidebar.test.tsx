import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
  it('renders branding and navigation icons', () => {
    render(<Sidebar />);

    // branding
    expect(screen.getByText('N')).toBeInTheDocument();

    // navigation icons are rendered as SVGs; ensure at least one svg exists
    const svgs = document.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });
});
