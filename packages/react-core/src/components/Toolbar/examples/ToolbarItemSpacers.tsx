import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarItemSpacers: React.FunctionComponent = () => {
  const itemGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap">
        <ToolbarItem gap={{ default: 'gapNone' }}>
          <Button variant="secondary">No Gap</Button>
          <Button variant="secondary">No Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem gap={{ default: 'gapSm' }}>
          <Button variant="secondary">Small Gap</Button>
          <Button variant="secondary">Small Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem gap={{ default: 'gapXl' }}>
          <Button variant="secondary">Extra Large Gap</Button>
          <Button variant="secondary">Extra Large Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const itemColumnGapItems = (
    <React.Fragment>
      <ToolbarGroup className="pf-m-wrap">
        <ToolbarItem columnGap={{ default: 'columnGapNone' }}>
          <Button variant="secondary">No Column Gap</Button>
          <Button variant="secondary">No Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem columnGap={{ default: 'columnGapSm' }}>
          <Button variant="secondary">Small Column Gap</Button>
          <Button variant="secondary">Small Column Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem columnGap={{ default: 'columnGapXl' }}>
          <Button variant="secondary">Extra Large Column Gap</Button>
          <Button variant="secondary">Extra Large Column Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const itemRowGapItems = (
    <React.Fragment>
      <ToolbarGroup>
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapNone' }}>
          <Button variant="secondary">No Row Gap</Button>
          <Button variant="secondary">No Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapSm' }}>
          <Button variant="secondary">Small Row Gap</Button>
          <Button variant="secondary">Small Row Gap</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator"></ToolbarItem>
        <ToolbarItem className="pf-m-wrap" rowGap={{ default: 'rowGapXl' }}>
          <Button variant="secondary">Extra Large Row Gap</Button>
          <Button variant="secondary">Extra Large Row Gap</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  return (
    <>
      Using gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemGapItems}</ToolbarContent>
      </Toolbar>
      Using column gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemColumnGapItems}</ToolbarContent>
      </Toolbar>
      Using row gap
      <br />
      <br />
      <Toolbar id="toolbar-spacers">
        <ToolbarContent>{itemRowGapItems}</ToolbarContent>
      </Toolbar>
    </>
  );
};
