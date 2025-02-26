import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';

import { ToolbarToggleGroup } from '../ToolbarToggleGroup';
import { Toolbar } from '../Toolbar';
import { ToolbarItem } from '../ToolbarItem';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarFilter } from '../ToolbarFilter';
import { ToolbarGroup } from '../ToolbarGroup';
import { Button } from '../../Button/Button';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';

jest.mock('../../../helpers/GenerateId/GenerateId');

jest.mock('../../../helpers/GenerateId/GenerateId');

describe('Toolbar', () => {
  it('should render inset', () => {
    const items = (
      <Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </Fragment>
    );

    const { asFragment } = render(
      <Toolbar
        id="toolbar"
        inset={{
          default: 'insetNone',
          md: 'insetSm',
          xl: 'inset2xl',
          '2xl': 'insetLg'
        }}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with custom label content', () => {
    const items = (
      <Fragment>
        <ToolbarToggleGroup toggleIcon={<Fragment />} breakpoint="xl">
          <ToolbarGroup variant="filter-group">
            <ToolbarFilter
              labels={['New', 'Pending']}
              deleteLabel={(_category, _label) => {}}
              deleteLabelGroup={(_category) => {}}
              categoryName="Status"
            >
              test content
            </ToolbarFilter>
          </ToolbarGroup>
        </ToolbarToggleGroup>
      </Fragment>
    );

    const customLabelGroupContent = (
      <Fragment>
        <ToolbarItem>
          <Button variant="link" onClick={() => {}} isInline>
            Save filters
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="link" onClick={() => {}} isInline>
            Clear all filters
          </Button>
        </ToolbarItem>
      </Fragment>
    );

    const { asFragment } = render(
      <Toolbar
        id="toolbar-with-filter"
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="xl"
        customLabelGroupContent={customLabelGroupContent}
      >
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByRole('button', { name: 'Save filters' }).length).toBe(1);
    expect(screen.getAllByRole('button', { name: 'Clear all filters' }).length).toBe(1);
  });

  it('Renders with class ${styles.modifiers.noBackground} when colorVariant="no-background"', () => {
    const items = (
      <Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </Fragment>
    );

    render(
      <Toolbar id="toolbar" colorVariant="no-background" data-testid="Toolbar-test-no-background-id">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('Toolbar-test-no-background-id')).toHaveClass(styles.modifiers.noBackground);
  });

  it('Renders with class ${styles.modifiers.primary} when colorVariant="primary"', () => {
    const items = (
      <Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </Fragment>
    );

    render(
      <Toolbar id="toolbar" colorVariant="primary" data-testid="Toolbar-test-primary-id">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('Toolbar-test-primary-id')).toHaveClass(styles.modifiers.primary);
  });

  it('Renders with class ${styles.modifiers.secondary} when colorVariant="secondary"', () => {
    const items = (
      <Fragment>
        <ToolbarItem>Test</ToolbarItem>
        <ToolbarItem>Test 2</ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>Test 3 </ToolbarItem>
      </Fragment>
    );

    render(
      <Toolbar id="toolbar" colorVariant="secondary" data-testid="Toolbar-test-secondary-id">
        <ToolbarContent>{items}</ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('Toolbar-test-secondary-id')).toHaveClass(styles.modifiers.secondary);
  });

  it('should render ToolbarContent with pf-m-wrap when rowWrap is set to wrap', () => {
    render(
      <Toolbar>
        <ToolbarContent data-testid="toolbarcontent" rowWrap={{ default: 'wrap' }}>
          Test
        </ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('toolbarcontent').querySelector('div')).toHaveClass('pf-m-wrap');
  });

  it('should render ToolbarContent with pf-m-nowrap when rowWrap is set to nowrap', () => {
    render(
      <Toolbar>
        <ToolbarContent data-testid="toolbarcontent" rowWrap={{ default: 'nowrap' }}>
          Test
        </ToolbarContent>
      </Toolbar>
    );

    expect(screen.getByTestId('toolbarcontent').querySelector('div')).toHaveClass('pf-m-nowrap');
  });
});
