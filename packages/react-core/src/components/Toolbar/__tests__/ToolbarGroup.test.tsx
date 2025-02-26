import { render, screen } from '@testing-library/react';
import { ToolbarGroup } from '../ToolbarGroup';

describe('ToolbarItem', () => {
  it('should render with pf-m-overflow-container when isOverflowContainer is set', () => {
    render(
      <ToolbarGroup data-testid="toolbargroup" isOverflowContainer>
        Test
      </ToolbarGroup>
    );
    expect(screen.getByTestId('toolbargroup')).toHaveClass('pf-m-overflow-container');
  });
  it('should render with pf-m-wrap when rowWrap is set to wrap', () => {
    render(
      <ToolbarGroup data-testid="toolbargroup" rowWrap={{ default: 'wrap' }}>
        Test
      </ToolbarGroup>
    );
    expect(screen.getByTestId('toolbargroup')).toHaveClass('pf-m-wrap');
  });
  it('should render with pf-m-nowrap when rowWrap is set to nowrap', () => {
    render(
      <ToolbarGroup data-testid="toolbargroup" rowWrap={{ default: 'nowrap' }}>
        Test
      </ToolbarGroup>
    );
    expect(screen.getByTestId('toolbargroup')).toHaveClass('pf-m-nowrap');
  });
});
