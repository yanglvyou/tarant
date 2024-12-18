import { View } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import classNames from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';
import { useMemo } from 'react';
import Transition from '../transition';
import { prefixClassname } from '../../utils/prefix';
import useUncontrolled from '../../hooks/use-uncontrolled';
import { preventDefault } from '../../utils/dom/event';
import { useLockScrollTaro } from '../../utils/dom/use-lock-scroll-taro';
import { BackdropProps } from '../../../types/backdrop';

export default function Backdrop(props: BackdropProps) {
  const {
    className,
    style: styleProp,
    defaultOpen,
    open: openProp,
    closeable = false,
    lock = true,
    duration,
    children,
    onClick,
    onClose,
    ...restProps
  } = props;

  const { value: open = false, setValue } = useUncontrolled({
    defaultValue: defaultOpen,
    value: openProp,
  });

  useLockScrollTaro(!!open && lock);

  const durationStyle = useMemo(
    () => (_.isNumber(duration) ? { '--animation-duration-base': `${duration as number}ms` } : {}),
    [duration]
  );

  function handleClick(event: ITouchEvent) {
    onClick?.(event);
    if (closeable) {
      setValue(false);
      onClose?.(false);
    }
  }

  return (
    <Transition in={open} appear mountOnEnter timeout={duration} name="fade">
      <View
        className={classNames(
          prefixClassname('backdrop'),
          {
            [prefixClassname('backdrop--open')]: open,
          },
          className
        )}
        style={{
          ...durationStyle,
          ...styleProp,
        }}
        catchMove={lock}
        children={children}
        onClick={handleClick}
        onTouchMove={preventDefault}
        {...restProps}
      />
    </Transition>
  );
}

Backdrop.displayName = 'Backdrop';
