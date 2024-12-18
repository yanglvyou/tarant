import { ReactNode, ComponentClass } from 'react';
import { LoadingThemeVars } from './loading.shared';
import { ButtonThemeVars } from './button.shared';
import { BackdropThemeVars } from './backdrop.shared';
interface ConfigProviderProps {
  theme?: Record<string, string | number>;
  children?: ReactNode;
}

declare const ConfigProvider: ComponentClass<ConfigProviderProps>;

export type ConfigProviderThemeVars = LoadingThemeVars & ButtonThemeVars & BackdropThemeVars;

export { ConfigProvider, ConfigProviderProps };
