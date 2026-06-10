import { render, screen } from '@testing-library/react';
import CourseCard from '../components/CourseCard';

describe('CourseCard', () => {
  it('renders title and progress text', () => {
    render(<CourseCard title="Test Course" progress={42} />);

    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('42% Complete')).toBeInTheDocument();
  });
});
