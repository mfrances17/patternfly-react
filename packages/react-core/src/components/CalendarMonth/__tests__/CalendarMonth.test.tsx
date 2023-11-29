import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalendarMonth } from '../CalendarMonth';
import styles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month';

jest.mock('../../../helpers/util');
jest.mock('../../../helpers/OUIA/__mocks__/ouia');

const formatDate = (date: Date) =>
  `${date.getDate()} ${date.toLocaleDateString(undefined, { month: 'long' })} ${date.getFullYear()}`;

test(`Renders with with only class name ${styles.calendarMonth} by default`, () => {
  render(<CalendarMonth data-testid="month" />);
  expect(screen.getByTestId('month')).toHaveClass(styles.calendarMonth, { exact: true });
});

test(`Renders with with class name ${styles.calendarMonth}`, () => {
  render(<CalendarMonth data-testid="month" />);
  expect(screen.getByTestId('month')).toHaveClass(styles.calendarMonth);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CalendarMonth data-testid="month" className="custom-class" />);
  expect(screen.getByTestId('month')).toHaveClass('custom-class');
});

test('Renders with custom class name when className prop is provided', () => {
  const date = new Date(2001, 5);
  render(<CalendarMonth date={date} />);
  expect(screen.getByRole('button', { name: formatDate(date) })).toBeInTheDocument();
});

// render(<CalendarMonth date={new Date(2024, 5)} />);
// const previousMonthDate = screen.getByRole('button', { name: '31 May 2024' });
// expect(previousMonthDate).toBeVisible();

/*
TBD
-locale
-monthFormat
-weekdayFormat
-longWeekdayFormat
-dayFormat
-weekStart default
-weekStart custom
-validators?
-rangeStart
*/

test('Renders with default prevMonthAriaLabel', () => {
  render(<CalendarMonth />);
  expect(screen.getByRole('button', { name: /Previous month/i })).toHaveAccessibleName('Previous month');
});

test('Renders with custom prevMonthAriaLabel', () => {
  render(<CalendarMonth prevMonthAriaLabel="last month" />);
  expect(screen.getByRole('button', { name: /last month/i })).toHaveAccessibleName('last month');
});

test('Renders with default nextMonthAriaLabel', () => {
  render(<CalendarMonth />);
  expect(screen.getByRole('button', { name: /Next month/i })).toHaveAccessibleName('Next month');
});

test('Renders with custom nextMonthAriaLabel', () => {
  render(<CalendarMonth nextMonthAriaLabel="coming month" />);
  expect(screen.getByRole('button', { name: /coming month/i })).toHaveAccessibleName('coming month');
});

test('Renders with default yearInputAriaLabel', () => {
  render(<CalendarMonth />);
  expect(screen.getByRole('spinbutton', { name: /Select year/i })).toHaveAccessibleName('Select year');
});

test('Renders with custom yearInputAriaLabel', () => {
  render(<CalendarMonth yearInputAriaLabel="Choose year" />);
  expect(screen.getByRole('spinbutton', { name: /Choose year/i })).toHaveAccessibleName('Choose year');
});

test('Renders with default cellAriaLabel', () => {
  const todayDate = new Date();

  render(<CalendarMonth />);
  expect(screen.getByRole('button', { name: `${formatDate(todayDate)}` })).toHaveAccessibleName(
    `${formatDate(todayDate)}`
  );
});

// render with custom cellAriaLabel - NOT WORKING

// render with isDateFocused - NOT WORKING
// test('Renders with date focused', () => {
//   const todayDate = new Date;

//   render(<CalendarMonth date={todayDate} isDateFocused />);
//   expect(screen.getByRole('button', { name: `${formatDate(todayDate)}`})).toHaveClass(styles.modifiers.focus);
//  });

test('Render with correct attributes in InlineProps', () => {
  render(
    <CalendarMonth
      inlineProps={{
        component: 'article',
        title: <div>My Calendar</div>,
        ariaLabelledby: 'This is my calendar'
      }}
    />
  );

  expect(screen.getByRole('article')).toHaveAttribute('aria-labelledby', 'This is my calendar');
  expect(screen.getByText('My Calendar')).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CalendarMonth date={new Date(2024, 6)} />);
  expect(asFragment()).toMatchSnapshot();
});
