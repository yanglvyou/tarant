import { ViewProps } from '@tarojs/components/types/View';
import { ComponentClass } from 'react';

export type LoadingType = 'circular' | 'spinner';

type LoadingDirection = 'horizontal' | 'vertical';

export interface LoadingProps extends ViewProps {
  className?: string;
  size?: number | string;
  type?: LoadingType;
  direction?: LoadingDirection;
  children?: ReactNode;
}

declare const Loading: ComponentClass<LoadingProps>;

export { Loading, LoadingProps };
