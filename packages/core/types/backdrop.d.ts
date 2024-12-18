import { ViewProps } from '@tarojs/components/types/View';
import { CSSProperties, ReactNode, ComponentClass } from 'react';

interface BackdropProps extends ViewProps {
  style?: CSSProperties;
  defaultOpen?: boolean;
  open?: boolean;
  closeable?: boolean;
  duration?: number;
  children?: ReactNode;
  lock?: boolean;
  onClose?(opened: boolean): void;
}

declare const Backdrop: ComponentClass<BackdropProps>;

export { Backdrop, BackdropProps };
