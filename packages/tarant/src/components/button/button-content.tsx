import { View } from '@tarojs/components';
import classNames from 'classnames';
import * as React from 'react';
import { prefixClassname } from '../../utils/prefix';
import { ButtonContentProps } from '../../../types/button';

function ButtonContent(props: ButtonContentProps) {
  const { className, ...restProps } = props;
  return (
    <View className={classNames(prefixClassname('button__content'), className)} {...restProps} />
  );
}

export default ButtonContent;
