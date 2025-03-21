---
id: Panel
section: components
cssPrefix: pf-v6-c-panel
propComponents: [Panel, PanelMain, PanelMainBody, PanelHeader, PanelFooter]
---

## Examples

### Basic

```js
import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

const BasicPanel = () => (
  <Panel>
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Header

```js
import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider } from '@patternfly/react-core';

const HeaderPanel = () => (
  <Panel>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Footer

```js
import { Panel, PanelMain, PanelMainBody, PanelFooter } from '@patternfly/react-core';

const FooterPanel = () => (
  <Panel>
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
```

### Header and footer

```js
import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';

const HeaderFooterPanel = () => (
  <Panel>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
```

### No body

```js
import { Panel, PanelMain } from '@patternfly/react-core';

const NoBodyPanel = () => (
  <Panel>
    <PanelMain>Main content</PanelMain>
  </Panel>
);
```

### Raised

```js
import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

const RaisedPanel = () => (
  <Panel variant="raised">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Bordered

```js
import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

const BorderedPanel = () => (
  <Panel variant="bordered">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Secondary variant

```js
import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

const PanelSecondaryVariant = () => (
  <Panel variant="secondary">
    <PanelMain>
      <PanelMainBody>Main content</PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Scrollable

```js
import { Panel, PanelMain, PanelMainBody } from '@patternfly/react-core';

const ScrollablePanel = () => (
  <Panel isScrollable>
    <PanelMain tabIndex={0}>
      <PanelMainBody>
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
      </PanelMainBody>
    </PanelMain>
  </Panel>
);
```

### Scrollable with header and footer

```js
import { Panel, PanelMain, PanelMainBody, PanelHeader, Divider, PanelFooter } from '@patternfly/react-core';

const ScrollableHeaderFooterPanel = () => (
  <Panel isScrollable>
    <PanelHeader>Header content</PanelHeader>
    <Divider />
    <PanelMain tabIndex={0}>
      <PanelMainBody>
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
        <br />
        <br />
        Main content
      </PanelMainBody>
    </PanelMain>
    <PanelFooter>Footer content</PanelFooter>
  </Panel>
);
```
