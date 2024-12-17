import { View } from '@tarojs/components';
import classNames from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';
import { cloneElement, ReactElement, ReactNode, useContext, useMemo } from 'react';
import ButtonBase from '../button-base';
import Loading from '../loading';
import ButtonContent from './button-content';
import ButtonGroupContext from './button-group.context';
import ButtonContext from './button.context';
import { LoadingProps } from '../../../types/loading';
import { prefixClassname } from '../../utils/prefix';
import { isElementOf, isObjectElement } from '../../utils/validate';
import { ButtonProps, UseButtonChildrenOptions } from '../../../types/button';
import Children from '../../utils/children';

function useButtonLoading(loading?: boolean | LoadingProps | ReactElement): ReactNode {
  return useMemo(() => {
    if (_.isBoolean(loading) && loading) {
      return (
        <Loading
          className={classNames(
            prefixClassname('button__loading'),
            prefixClassname('button__loading--right')
          )}
        />
      );
    }

    if (isObjectElement(loading as ReactNode)) {
      const { className, ...restProps } = loading as LoadingProps;
      return (
        <Loading
          className={classNames(
            prefixClassname('button__loading'),
            prefixClassname('button__loading--right'),
            className
          )}
          {...restProps}
        />
      );
    }

    if (isElementOf(loading as ReactNode, Loading)) {
      return cloneElement(loading as ReactElement, {
        className: classNames(
          prefixClassname('button__loading'),
          prefixClassname('button__loading--right')
        ),
      });
    }

    return loading as ReactNode;
  }, [loading]);
}

function useButtonChildren(options: UseButtonChildrenOptions) {
  const { loading, icon: iconProp, children, iconPosition } = options;
  if (isElementOf(children, ButtonContent)) {
    return children;
  }
  const childrenArray = Children.toArray(children);

  return (
    <ButtonContent>
      {loading}
      {iconPosition === 'left'}
      {_.map(childrenArray, (child, index) => {
        return (
          <View key={index} className={prefixClassname('button__text')}>
            {child}
          </View>
        );
      })}
      {iconPosition === 'right'}
    </ButtonContent>
  );
}

function useButtonPropertyValue<T>(value1?: T, value2?: T, defaultValue?: T) {
  return useMemo(() => {
    if (value1) {
      return value1;
    }
    if (value2) {
      return value2;
    }
    return defaultValue;
  }, [defaultValue, value1, value2]);
}

export default function Button(props: ButtonProps) {
  const {
    className,
    style,
    variant: variantProp,
    shape: shapeProp,
    size: sizeProp,
    color: colorProp,
    formType = 'button',
    block,
    hairline: hairlineProp,
    disabled: disabledProp,
    loading: loadingProp,
    icon,
    iconPosition = 'left',
    children: childrenProp,
    onClick,
    ...restProps
  } = props;
  const {
    variant: variantCtx,
    shape: shapeCtx,
    size: sizeCtx,
    color: colorCtx,
    hairline: hairlineCtx,
    disabled: disabledCtx,
  } = useContext(ButtonGroupContext);
  const { onClick: onCtxClick } = useContext(ButtonContext);
  const variant = useButtonPropertyValue(variantProp, variantCtx, 'contained');
  const shape = useButtonPropertyValue(shapeProp, shapeCtx);
  const size = useButtonPropertyValue(sizeProp, sizeCtx, 'medium');
  const color = useButtonPropertyValue(colorProp, colorCtx, 'default');
  const hairline = useButtonPropertyValue(hairlineProp, hairlineCtx);
  const disabled = useButtonPropertyValue(disabledProp, disabledCtx);

  const loading = useButtonLoading(loadingProp);
  const children = useButtonChildren({ children: childrenProp, loading, icon, iconPosition });

  return (
    <View
      className={classNames(
        prefixClassname('button'),
        {
          // Set variant style
          [prefixClassname('button--text')]: variant === 'text',
          [prefixClassname('button--contained')]: variant === 'contained',
          [prefixClassname('button--outlined')]: variant === 'outlined',
          // Set color style
          [prefixClassname(`button--${color}`)]: color,
          // Set shape style
          [prefixClassname('button--round')]: shape === 'round',
          [prefixClassname('button--square')]: shape === 'square',
          // Set size style
          [prefixClassname('button--mini')]: size === 'mini',
          [prefixClassname('button--small')]: size === 'small',
          [prefixClassname('button--medium')]: size === 'medium',
          [prefixClassname('button--large')]: size === 'large',
          // Set hairline style
          [prefixClassname('button--hairline')]: hairline,
          [prefixClassname('hairline--surround')]: hairline,
          [prefixClassname('button--disabled')]: disabled,
          [prefixClassname('button--loading')]: loading,
          [prefixClassname('button--block')]: block,
        },
        className
      )}
      style={style}
      onClick={e => {
        if (!disabled && !loading) {
          onClick?.(e);
          onCtxClick?.(e, props);
        }
      }}
    >
      {children}
      <ButtonBase
        className={prefixClassname('button__button')}
        formType={formType === 'submit' ? 'submit' : formType === 'reset' ? 'reset' : undefined}
        disabled={disabled || !!loading}
        loading={false}
        {...restProps}
      />
    </View>
  );
}

export function createButton(children: ReactNode | ButtonProps, props?: ButtonProps) {
  if (_.isPlainObject(children)) {
    return <Button {...(children as ButtonProps)} {...props} />;
  }
  return <Button children={children as ReactNode} {...props} />;
}
