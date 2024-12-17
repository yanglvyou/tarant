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
import ButtonGroupContext from './button-group.context';
import { prefixClassname } from '../../utils/prefix';
function ButtonGroup(props) {
    const { className, variant, shape, size, color, block, hairline, disabled } = props, restProps = __rest(props, ["className", "variant", "shape", "size", "color", "block", "hairline", "disabled"]);
    return (React.createElement(ButtonGroupContext.Provider, { value: {
            variant,
            size,
            color,
            shape,
            hairline,
            disabled,
        } },
        React.createElement(View, Object.assign({ className: classNames(prefixClassname('button-group'), {
                [prefixClassname('button-group--contained')]: variant === 'contained',
                [prefixClassname('button-group--text')]: variant === 'text',
                [prefixClassname('button-group--outlined')]: variant === 'outlined',
                [prefixClassname('button-group--round')]: shape === 'round',
                [prefixClassname('button-group--block')]: block,
            }, className) }, restProps))));
}
export default ButtonGroup;
//# sourceMappingURL=button-group.js.map