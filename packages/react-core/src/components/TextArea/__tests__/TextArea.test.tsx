import { createRef } from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextArea } from '../TextArea';
import { ValidatedOptions } from '../../../helpers/constants';
import formControlStyles from '@patternfly/react-styles/css/components/FormControl/form-control';

const props = {
  onChange: jest.fn(),
  value: 'test textarea'
};

test('Textarea input passes value and event to onChange handler', async () => {
  const user = userEvent.setup();
  render(<TextArea {...props} value="" aria-label="test textarea" />);

  await user.type(screen.getByRole('textbox'), 'a');

  expect(props.onChange).toHaveBeenCalledWith(expect.any(Object), 'a');
});

test('Renders simple text input', () => {
  render(
    <div data-testid="textarea">
      <TextArea aria-label="simple textarea" />
    </div>
  );
  expect(screen.getByTestId('textarea').firstChild).toBeVisible();
});

test('Renders with custom class passed', () => {
  render(<TextArea aria-label="custom class textarea" className="test-class" />);

  expect(screen.getByRole('textbox').parentElement).toHaveClass('test-class');
});

test('Renders text area with required attribute using isRequired', () => {
  render(<TextArea aria-label="required textarea" isRequired />);

  expect(screen.getByRole('textbox')).toBeRequired();
});

test('Text area is not required by default', () => {
  render(<TextArea aria-label="not required textarea" />);

  expect(screen.getByRole('textbox')).not.toBeRequired();
});

test('Renders disabled text area using isDisabled', () => {
  render(<TextArea aria-label="is disabled textarea" isDisabled />);
  expect(screen.getByRole('textbox')).toBeDisabled();
});

test('Text area is not disabled by default', () => {
  render(<TextArea aria-label="not disabled textarea" />);
  expect(screen.getByRole('textbox')).not.toBeDisabled();
});

test('Renders read only text area using readOnlyVariant', () => {
  render(<TextArea aria-label="is read only textarea" readOnlyVariant={'default'} />);
  expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
});

test('Text area is not read only by default', () => {
  render(<TextArea aria-label="not read only textarea" />);
  expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
});

test('Renders text area with default class names only', () => {
  render(<TextArea aria-label="validated textarea" />);

  const formControlWrapper = screen.getByRole('textbox').parentElement;
  expect(formControlWrapper).toHaveClass(formControlStyles.formControl);
  expect(formControlWrapper).toHaveClass(formControlStyles.modifiers.textarea);
});

test('Renders validated text area with success className', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.success} />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-success');
});

test('Renders validated text area with warning className', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.warning} />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-warning');
});

test('Renders invalid text area', () => {
  render(<TextArea aria-label="validated textarea" validated={ValidatedOptions.error} />);
  expect(screen.getByRole('textbox')).toBeInvalid();
});

test('Text area is not invalid by default', () => {
  render(<TextArea aria-label="validated textarea" />);
  expect(screen.getByRole('textbox')).not.toBeInvalid();
});

test('Renders vertically & resizable text area by default', () => {
  render(<TextArea aria-label="vertical resize textarea" />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-resize-both');
});

test('Renders vertically & resizable text area when resizeOrientation is set to both', () => {
  render(<TextArea aria-label="vertical resize textarea" resizeOrientation="both" />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-resize-both');
});

test('Renders vertically resizable text area', () => {
  render(<TextArea aria-label="vertical resize textarea" resizeOrientation="vertical" />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-resize-vertical');
});

test('Renders horizontally resizable text area', () => {
  render(<TextArea aria-label="horizontal resize textarea" resizeOrientation="horizontal" />);
  expect(screen.getByRole('textbox').parentElement).toHaveClass('pf-m-resize-horizontal');
});

test('Disables resizable text area', () => {
  render(<TextArea aria-label="disabled resize textarea" resizeOrientation="none" />);
  expect(screen.getByRole('textbox').parentElement).not.toHaveClass('pf-m-resize-vertical');
  expect(screen.getByRole('textbox').parentElement).not.toHaveClass('pf-m-resize-horizontal');
  expect(screen.getByRole('textbox').parentElement).not.toHaveClass('pf-m-resize-both');
});

test('Throws console error when no aria-label or id is given', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea />);

  expect(console.error).toHaveBeenCalled();
});

test('Does not throw console error when id is given but no aria-label', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea id="5" />);

  expect(console.error).not.toHaveBeenCalled();
});

test('Does not throw console error when aria-label is given but no id', () => {
  jest.spyOn(global.console, 'error');

  render(<TextArea aria-label="test textarea" />);

  expect(console.error).not.toHaveBeenCalled();
});

test('TextArea can be accessed via passed ref', () => {
  const testRef: React.RefObject<HTMLTextAreaElement | null> = createRef();
  render(<TextArea ref={testRef} />);
  global.scrollTo = jest.fn();
  testRef.current?.focus();
  expect(screen.getByRole('textbox')).toHaveFocus();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <TextArea className="custom class" isRequired isDisabled autoResize aria-label="test textarea" />
  );
  expect(asFragment()).toMatchSnapshot();
});
