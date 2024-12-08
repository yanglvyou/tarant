import { View } from '@tarojs/components';
import { ViewProps } from '@tarojs/components/types/View';
import classNames from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';
import { useMemo } from 'react';
import { prefixClassname } from '../../utils//prefix';
import { addUnitPx } from '../../utils/format/unit';
import { LoadingProps } from 'types/loading';

const SpinIcon = _.range(0, 12).map(key => (
  <View key={key} className={prefixClassname('loading__spinner__item')} />
));

function LoadingSpinner(props: LoadingProps) {
  const { size } = props;
  const rootStyle = useMemo(
    () => ({
      width: addUnitPx(size) || '',
      height: addUnitPx(size) || '',
    }),
    [size]
  );
  return (
    <View className={prefixClassname('loading__spinner')} style={rootStyle}>
      {SpinIcon}
    </View>
  );
}

function LoadingCircular(props: LoadingProps) {
  const { size } = props;
  const rootStyle = useMemo(
    () => ({
      width: addUnitPx(size) || '',
      height: addUnitPx(size) || '',
    }),
    [size]
  );
  return <View className={prefixClassname('loading__circular')} style={rootStyle} />;
}

export default function Loading(props: LoadingProps) {
  const {
    className,
    size,
    type = 'circular',
    direction = 'horizontal',
    children,
    ...restProps
  } = props;

  return (
    <View
      className={classNames(
        prefixClassname('loading'),
        prefixClassname(`loading--${direction}`),
        prefixClassname(`loading--${type}`),
        className
      )}
      {...restProps}
    >
      {type === 'spinner' && <LoadingSpinner size={size} />}
      {type === 'circular' && <LoadingCircular size={size} />}
      {children && <View className={prefixClassname('loading__text')} children={children} />}
    </View>
  );
}
