import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  ComponentClass,
  FunctionComponent,
} from 'react';
import { ITouchEvent, ButtonProps as TaroButtonProps } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import { LoadingProps } from './loading';

import {
  ButtonColor,
  ButtonFormType,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
  IconPosition,
} from './button.shared';

import ButtonContent from '../src/components/button/button-content';
import ButtonGroup from '../src/components/button/button-group';

export interface ButtonContentProps extends PropsWithChildren<ViewProps> {}

export interface ButtonProps
  extends Omit<TaroButtonProps, 'size' | 'formType' | 'type' | 'loading' | 'plain'> {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  color?: ButtonColor;
  formType?: ButtonFormType;
  loading?: boolean | LoadingProps | ReactElement;
  block?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  children?: ReactNode;
}

export interface ButtonContextValue {
  onClick?(event: ITouchEvent, props: ButtonProps): void;
}

export interface ButtonGroupContextValue {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  color?: ButtonColor;
  hairline?: boolean;
  disabled?: boolean;
}

export interface ButtonGroupProps extends PropsWithChildren<ViewProps> {
  variant?: ButtonVariant;
  shape?: 'round';
  size?: ButtonSize;
  color?: ButtonColor;
  block?: boolean;
  hairline?: boolean;
  disabled?: boolean;
}

export interface UseButtonChildrenOptions {
  children?: ReactNode;
  loading?: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
}

export interface ButtonInterface extends FunctionComponent<ButtonProps> {
  Content: typeof ButtonContent;
  Group: typeof ButtonGroup;
}

declare const Button: ButtonInterface;

export { Button, ButtonInterface };
