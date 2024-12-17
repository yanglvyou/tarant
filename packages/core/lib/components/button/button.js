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
import * as _ from 'lodash';
import * as React from 'react';
import { cloneElement, useContext, useMemo } from 'react';
import ButtonBase from '../button-base';
import Loading from '../loading';
import ButtonContent from './button-content';
import ButtonGroupContext from './button-group.context';
import ButtonContext from './button.context';
import { prefixClassname } from '../../utils/prefix';
import { isElementOf, isObjectElement } from '../../utils/validate';
import Children from '../../utils/children';
function useButtonLoading(loading) {
    return useMemo(() => {
        if (_.isBoolean(loading) && loading) {
            return (React.createElement(Loading, { className: classNames(prefixClassname('button__loading'), prefixClassname('button__loading--right')) }));
        }
        if (isObjectElement(loading)) {
            const _a = loading, { className } = _a, restProps = __rest(_a, ["className"]);
            return (React.createElement(Loading, Object.assign({ className: classNames(prefixClassname('button__loading'), prefixClassname('button__loading--right'), className) }, restProps)));
        }
        if (isElementOf(loading, Loading)) {
            return cloneElement(loading, {
                className: classNames(prefixClassname('button__loading'), prefixClassname('button__loading--right')),
            });
        }
        return loading;
    }, [loading]);
}
function useButtonChildren(options) {
    const { loading, icon: iconProp, children, iconPosition } = options;
    if (isElementOf(children, ButtonContent)) {
        return children;
    }
    const childrenArray = Children.toArray(children);
    return (React.createElement(ButtonContent, null,
        loading,
        iconPosition === 'left',
        _.map(childrenArray, (child, index) => {
            return (React.createElement(View, { key: index, className: prefixClassname('button__text') }, child));
        }),
        iconPosition === 'right'));
}
function useButtonPropertyValue(value1, value2, defaultValue) {
    return useMemo(() => {
        if (value1) {
            return value1;
        }
        if (value2) {
            return value2;
        }
        return defaultValue;
    }, [defaultValue, value1, value2]);
}
export default function Button(props) {
    const { className, style, variant: variantProp, shape: shapeProp, size: sizeProp, color: colorProp, formType = 'button', block, hairline: hairlineProp, disabled: disabledProp, loading: loadingProp, icon, iconPosition = 'left', children: childrenProp, onClick } = props, restProps = __rest(props, ["className", "style", "variant", "shape", "size", "color", "formType", "block", "hairline", "disabled", "loading", "icon", "iconPosition", "children", "onClick"]);
    const { variant: variantCtx, shape: shapeCtx, size: sizeCtx, color: colorCtx, hairline: hairlineCtx, disabled: disabledCtx, } = useContext(ButtonGroupContext);
    const { onClick: onCtxClick } = useContext(ButtonContext);
    const variant = useButtonPropertyValue(variantProp, variantCtx, 'contained');
    const shape = useButtonPropertyValue(shapeProp, shapeCtx);
    const size = useButtonPropertyValue(sizeProp, sizeCtx, 'medium');
    const color = useButtonPropertyValue(colorProp, colorCtx, 'default');
    const hairline = useButtonPropertyValue(hairlineProp, hairlineCtx);
    const disabled = useButtonPropertyValue(disabledProp, disabledCtx);
    const loading = useButtonLoading(loadingProp);
    const children = useButtonChildren({ children: childrenProp, loading, icon, iconPosition });
    return (React.createElement(View, { className: classNames(prefixClassname('button'), {
            // Set variant style
            [prefixClassname('button--text')]: variant === 'text',
            [prefixClassname('button--contained')]: variant === 'contained',
            [prefixClassname('button--outlined')]: variant === 'outlined',
            // Set color style
            [prefixClassname(`button--${color}`)]: color,
            // Set shape style
            [prefixClassname('button--round')]: shape === 'round',
            [prefixClassname('button--square')]: shape === 'square',
            // Set size style
            [prefixClassname('button--mini')]: size === 'mini',
            [prefixClassname('button--small')]: size === 'small',
            [prefixClassname('button--medium')]: size === 'medium',
            [prefixClassname('button--large')]: size === 'large',
            // Set hairline style
            [prefixClassname('button--hairline')]: hairline,
            [prefixClassname('hairline--surround')]: hairline,
            [prefixClassname('button--disabled')]: disabled,
            [prefixClassname('button--loading')]: loading,
            [prefixClassname('button--block')]: block,
        }, className), style: style, onClick: e => {
            if (!disabled && !loading) {
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
                onCtxClick === null || onCtxClick === void 0 ? void 0 : onCtxClick(e, props);
            }
        } },
        children,
        React.createElement(ButtonBase, Object.assign({ className: prefixClassname('button__button'), formType: formType === 'submit' ? 'submit' : formType === 'reset' ? 'reset' : undefined, disabled: disabled || !!loading, loading: false }, restProps))));
}
export function createButton(children, props) {
    if (_.isPlainObject(children)) {
        return React.createElement(Button, Object.assign({}, children, props));
    }
    return React.createElement(Button, Object.assign({ children: children }, props));
}
//# sourceMappingURL=button.js.map