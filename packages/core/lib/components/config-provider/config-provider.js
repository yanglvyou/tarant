import { View } from '@tarojs/components';
import * as _ from 'lodash';
import * as React from 'react';
import { useMemo } from 'react';
function convertThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach(key => {
        cssVars[`--${_.kebabCase(key)}`] = themeVars[key];
    });
    return cssVars;
}
function ConfigProvider(props) {
    const { theme = {}, children } = props;
    const style = useMemo(() => convertThemeVarsToCSSVars(theme), [theme]);
    return React.createElement(View, { style: style, children: children });
}
export default ConfigProvider;
//# sourceMappingURL=config-provider.js.map