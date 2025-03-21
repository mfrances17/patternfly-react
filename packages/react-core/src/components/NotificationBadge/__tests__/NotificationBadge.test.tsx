import { NotificationBadge } from '../NotificationBadge';
import { render, screen } from '@testing-library/react';

Object.values([true, false]).forEach((attentionVariant) => {
  test(`${attentionVariant} NotificationBadge needs attention`, () => {
    const { asFragment } = render(
      <NotificationBadge variant="attention">
        {attentionVariant ? 'needs attention' : 'does not need attention'} Badge
      </NotificationBadge>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test(`NotificationBadge count`, () => {
  const { asFragment } = render(<NotificationBadge variant="read" count={3} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders with aria-expanded="false" when isExpanded is not passed in.', () => {
  render(<NotificationBadge />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('Renders with aria-expanded="true" when isExpanded is passed in.', () => {
  render(<NotificationBadge isExpanded />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('Does not render with .pf-m-clicked when isExpanded is not passed in.', () => {
  render(<NotificationBadge />);

  expect(screen.getByRole('button')).not.toHaveClass('pf-m-clicked');
});

test('Renders with .pf-m-clicked when isExpanded is passed in.', () => {
  render(<NotificationBadge isExpanded />);

  expect(screen.getByRole('button')).toHaveClass('pf-m-clicked');
});
