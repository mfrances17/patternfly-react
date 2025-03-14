import { Fragment } from 'react';
import { Button, KeyTypes } from '@patternfly/react-core';

const handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  const { key } = event;
  const isEnterKey: boolean = key === KeyTypes.Enter;
  const isEnterOrSpaceKey: boolean = isEnterKey || key === KeyTypes.Space;

  if (isEnterOrSpaceKey) {
    event.preventDefault();
    alert(`${isEnterKey ? 'Enter' : 'Space'} key default behavior stopped by onKeyDown`);
  }
};

export const ButtonInlineSpanLink: React.FunctionComponent = () => (
  <Fragment>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Button variant="link" isInline component="span">
        This is long button text that needs to be a span so that it will wrap inline with the text around it.
      </Button>
      Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.
    </p>

    <br />

    <p>
      Note that using a <b>span</b> as a button does not fire the <b>onclick</b> event for Enter or Space keys.
      <Button variant="link" isInline component="span" onKeyDown={handleKeydown}>
        An <b>onKeyDown</b> event listener is needed for Enter and Space key presses to prevent their default behavior
        and trigger your code.
      </Button>
      Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.
    </p>
  </Fragment>
);
