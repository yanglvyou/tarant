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
import { useMemo } from 'react';
import { prefixClassname } from '../../utils/prefix';
import { addUnitPx } from '../../utils/format/unit';
const SpinIcon = _.range(0, 12).map(key => (React.createElement(View, { key: key, className: prefixClassname('loading__spinner__item') })));
function LoadingSpinner(props) {
    const { size } = props;
    const rootStyle = useMemo(() => ({
        width: addUnitPx(size) || '',
        height: addUnitPx(size) || '',
    }), [size]);
    return (React.createElement(View, { className: prefixClassname('loading__spinner'), style: rootStyle }, SpinIcon));
}
function LoadingCircular(props) {
    const { size } = props;
    const rootStyle = useMemo(() => ({
        width: addUnitPx(size) || '',
        height: addUnitPx(size) || '',
    }), [size]);
    return React.createElement(View, { className: prefixClassname('loading__circular'), style: rootStyle });
}
export default function Loading(props) {
    const { className, size, type = 'circular', direction = 'horizontal', children } = props, restProps = __rest(props, ["className", "size", "type", "direction", "children"]);
    return (React.createElement(View, Object.assign({ className: classNames(prefixClassname('loading'), prefixClassname(`loading--${direction}`), prefixClassname(`loading--${type}`), className) }, restProps),
        type === 'spinner' && React.createElement(LoadingSpinner, { size: size }),
        type === 'circular' && React.createElement(LoadingCircular, { size: size }),
        children && React.createElement(View, { className: prefixClassname('loading__text'), children: children })));
}
//# sourceMappingURL=index.js.map