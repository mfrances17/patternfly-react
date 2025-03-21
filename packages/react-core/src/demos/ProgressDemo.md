---
id: Progress
section: components
---
import { useState } from 'react';
import accessibilityStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

## Demos

### Basic

```js
import { useState } from 'react';
import { Progress, Button, Stack, StackItem } from '@patternfly/react-core';
import accessibilityStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

ProgressStepperDemo = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const onProgressUpdate = (nextValue) => {
    setCurrentValue(nextValue);
  };

  return (
    <Stack>
      <StackItem>
        <Button onClick={() => onProgressUpdate(currentValue - 10)} isDisabled={currentValue === 0}>
          Decrease value
        </Button>{' '}
        <Button onClick={() => onProgressUpdate(currentValue + 10)} isDisabled={currentValue === 100}>
          Increase value
        </Button>
        <br />
        <br />
      </StackItem>
      <StackItem>
        <div className={accessibilityStyles.screenReader} aria-live="polite">
          {`Progress value is ${currentValue}%.`}
        </div>
        <Progress value={currentValue} title="Title" />
      </StackItem>
    </Stack>
  );
};
```

### With only increasing progress

Sometimes a progress bar should only show increases to progress state. In this case, before the next value is set it should be checked against the current progress. The `Decrease progress` button attempts to set a lower progress value, simulating an update to a progress state that isn't desired, but won't change the progress state due to this check.

```js
import { useState } from 'react';
import { Progress, Button, Stack, StackItem } from '@patternfly/react-core';

ProgressStepperDemo = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const onProgressUpdate = (nextValue) => {
    if (nextValue > currentValue) {
      setCurrentValue(nextValue);
    }
  };

  return (
    <Stack>
      <StackItem>
        <Button onClick={() => onProgressUpdate(currentValue - 10)} isDisabled={currentValue === 0}>
          Decrease value
        </Button>{' '}
        <Button onClick={() => onProgressUpdate(currentValue + 10)} isDisabled={currentValue === 100}>
          Increase value
        </Button>
        <br />
        <br />
      </StackItem>
      <StackItem>
          <div className={accessibilityStyles.screenReader} aria-live="polite">
          {`Progress value is ${currentValue}%.`}
        </div>
        <Progress value={currentValue} title="Title" />
      </StackItem>
    </Stack>
  );
};
```
