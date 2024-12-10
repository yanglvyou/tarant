import { ReactNode, ComponentClass } from 'react';
interface ConfigProviderProps {
  theme?: Record<string, string | number>;
  children?: ReactNode;
}

declare const ConfigProvider: ComponentClass<ConfigProviderProps>;

export { ConfigProvider, ConfigProviderProps };
