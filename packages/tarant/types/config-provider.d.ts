import { ReactNode, ComponentClass } from 'react';
interface ConfigProviderProps {
  theme?: Record<string, string | number>;
  children?: ReactNode;
}

declare const ConfigProvider: ComponentClass<ConfigProviderProps>;

export type ConfigProviderThemeVars = import('../../../types/loading.shared').LoadingThemeVars &
  import('./button').ButtonThemeVars;

export { ConfigProvider, ConfigProviderProps };
