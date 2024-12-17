import { View } from '@tarojs/components';
import classNames from 'classnames';
import * as React from 'react';
import ButtonGroupContext from './button-group.context';
import { ButtonGroupProps } from '../../../types/button';
import { prefixClassname } from '../../utils/prefix';

function ButtonGroup(props: ButtonGroupProps) {
  const { className, variant, shape, size, color, block, hairline, disabled, ...restProps } = props;
  console.log('restProps: ', restProps);
  return (
    <ButtonGroupContext.Provider
      value={{
        variant,
        size,
        color,
        shape,
        hairline,
        disabled,
      }}
    >
      <View
        className={classNames(
          prefixClassname('button-group'),
          {
            [prefixClassname('button-group--contained')]: variant === 'contained',
            [prefixClassname('button-group--text')]: variant === 'text',
            [prefixClassname('button-group--outlined')]: variant === 'outlined',
            [prefixClassname('button-group--round')]: shape === 'round',
            [prefixClassname('button-group--block')]: block,
          },
          className
        )}
        {...restProps}
      />
    </ButtonGroupContext.Provider>
  );
}

export default ButtonGroup;
