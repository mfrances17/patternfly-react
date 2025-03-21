import { Fragment, useCallback, useEffect } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

import { KeyTypes } from '../../helpers/constants';
import { WizardStepType, isWizardSubStep } from './types';
import { WizardNavProps } from './WizardNav';
import { WizardStep, WizardStepProps } from './WizardStep';
import { WizardBody } from './WizardBody';

/**
 * Used to toggle between step content, including the body and footer. This is also where the navigation and its expandability is controlled.
 */

export interface WizardToggleProps {
  /** List of steps and/or sub-steps */
  steps: WizardStepType[];
  /** The current step */
  activeStep: WizardStepType;
  /** Wizard footer */
  footer: React.ReactElement<any>;
  /** Wizard navigation */
  nav: React.ReactElement<WizardNavProps>;
  /** The expandable dropdown button's aria-label */
  'aria-label'?: string;
  /** Flag to determine whether the dropdown navigation is expanded */
  isNavExpanded?: boolean;
  /** Callback to expand or collapse the dropdown navigation */
  toggleNavExpanded?: (event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void;
}

export const WizardToggle = ({
  steps,
  activeStep,
  footer,
  nav,
  isNavExpanded,
  toggleNavExpanded,
  'aria-label': ariaLabel = 'Wizard toggle'
}: WizardToggleProps) => {
  const isActiveSubStep = isWizardSubStep(activeStep);
  const parentStep = isActiveSubStep && steps.find((step) => step.id === activeStep.parentId);
  const nonSubSteps = steps.filter((step) => !isWizardSubStep(step));
  const wizardToggleIndex = nonSubSteps.indexOf(parentStep || activeStep) + 1;
  const isActiveStepStatus = activeStep.status;

  const handleKeyClicks = useCallback(
    (event: KeyboardEvent): void => {
      if (isNavExpanded && event.key === KeyTypes.Escape) {
        toggleNavExpanded?.(event);
      }
    },
    [isNavExpanded, toggleNavExpanded]
  );

  // Open/close collapsable navigation on keydown event
  useEffect(() => {
    const target = typeof document !== 'undefined' ? document.body : null;
    target?.addEventListener('keydown', handleKeyClicks, false);

    return () => {
      target?.removeEventListener('keydown', handleKeyClicks, false);
    };
  }, [handleKeyClicks]);

  const bodyContent = steps.map((step) => {
    const props: WizardStepProps = step.component?.props || {};
    const { children, body, ...propsWithoutChildren } = props;

    return (
      <Fragment key={step.id}>
        {activeStep?.id === step.id && <WizardBody {...body}>{children}</WizardBody>}

        <div key={step.id} style={{ display: 'none' }}>
          <WizardStep {...propsWithoutChildren} />
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <button
        onClick={toggleNavExpanded}
        className={css(styles.wizardToggle, isNavExpanded && 'pf-m-expanded')}
        aria-label={ariaLabel}
        aria-expanded={isNavExpanded}
      >
        <span className={css(styles.wizardToggleList)}>
          <span
            className={css(
              styles.wizardToggleListItem,
              isActiveStepStatus === 'error' && styles.modifiers.danger,
              isActiveStepStatus === 'success' && styles.modifiers.success
            )}
          >
            {isActiveStepStatus === 'error' && (
              <span className={css(styles.wizardToggleStatusIcon)}>
                <ExclamationCircleIcon />
              </span>
            )}
            {isActiveStepStatus === 'success' && (
              <span className={css(styles.wizardToggleStatusIcon)}>
                <CheckCircleIcon />
              </span>
            )}
            {isActiveStepStatus !== 'success' && isActiveStepStatus !== 'error' && (
              <span className={css(styles.wizardToggleNum)}>{wizardToggleIndex}</span>
            )}{' '}
            {parentStep?.name || activeStep?.name}
            {isActiveSubStep && <AngleRightIcon className={css(styles.wizardToggleSeparator)} />}
          </span>
          {isActiveSubStep && <span className={css(styles.wizardToggleListItem)}>{activeStep?.name}</span>}
        </span>

        <span className={css(styles.wizardToggleIcon)}>
          <CaretDownIcon />
        </span>
      </button>
      <div className={css(styles.wizardOuterWrap)}>
        <div className={css(styles.wizardInnerWrap)}>
          {nav}
          {bodyContent}
        </div>

        {footer}
      </div>
    </>
  );
};

WizardToggle.displayName = 'WizardToggle';
