var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { View } from '@tarojs/components';
import classNames from 'classnames';
import * as React from 'react';
import { prefixClassname } from '../../utils/prefix';
function ButtonContent(props) {
    const { className } = props, restProps = __rest(props, ["className"]);
    return (React.createElement(View, Object.assign({ className: classNames(prefixClassname('button__content'), className) }, restProps)));
}
export default ButtonContent;
//# sourceMappingURL=button-content.js.map