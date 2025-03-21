import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Badge/badge';

export interface BadgeProps extends React.HTMLProps<HTMLSpanElement> {
  /** Text announced by screen readers to indicate the current content/status of the badge. */
  screenReaderText?: string;
  /**  Adds styling to the badge to indicate it has been read */
  isRead?: boolean;
  /** Adds styling to the badge to indicate it is disabled */
  isDisabled?: boolean;
  /** content rendered inside the Badge */
  children?: React.ReactNode;
  /** additional classes added to the Badge */
  className?: string;
}

export const Badge: React.FunctionComponent<BadgeProps> = ({
  isRead = false,
  isDisabled = false,
  className = '',
  children = '',
  screenReaderText,
  ...props
}: BadgeProps) => (
  <span
    {...props}
    className={css(
      styles.badge,
      (isRead ? styles.modifiers.read : styles.modifiers.unread) as any,
      isDisabled && styles.modifiers.disabled,
      className
    )}
  >
    {children}
    {screenReaderText && <span className="pf-v6-screen-reader">{screenReaderText}</span>}
  </span>
);
Badge.displayName = 'Badge';
