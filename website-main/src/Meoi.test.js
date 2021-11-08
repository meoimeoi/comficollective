import { render, screen } from '@testing-library/react';
import Meoi from './Meoi';

test('renders link', () => {
  render(<Meoi />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
