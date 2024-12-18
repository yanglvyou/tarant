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
import Transition from '../transition';
import { prefixClassname } from '../../utils/prefix';
import useUncontrolled from '../../hooks/use-uncontrolled';
import { preventDefault } from '../../utils/dom/event';
import { useLockScrollTaro } from '../../utils/dom/use-lock-scroll-taro';
export default function Backdrop(props) {
    const { className, style: styleProp, defaultOpen, open: openProp, closeable = false, lock = true, duration, children, onClick, onClose } = props, restProps = __rest(props, ["className", "style", "defaultOpen", "open", "closeable", "lock", "duration", "children", "onClick", "onClose"]);
    const { value: open = false, setValue } = useUncontrolled({
        defaultValue: defaultOpen,
        value: openProp,
    });
    useLockScrollTaro(!!open && lock);
    const durationStyle = useMemo(() => (_.isNumber(duration) ? { '--animation-duration-base': `${duration}ms` } : {}), [duration]);
    function handleClick(event) {
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
        if (closeable) {
            setValue(false);
            onClose === null || onClose === void 0 ? void 0 : onClose(false);
        }
    }
    return (React.createElement(Transition, { in: open, appear: true, mountOnEnter: true, timeout: duration, name: "fade" },
        React.createElement(View, Object.assign({ className: classNames(prefixClassname('backdrop'), {
                [prefixClassname('backdrop--open')]: open,
            }, className), style: Object.assign(Object.assign({}, durationStyle), styleProp), catchMove: lock, children: children, onClick: handleClick, onTouchMove: preventDefault }, restProps))));
}
Backdrop.displayName = 'Backdrop';
//# sourceMappingURL=index.js.map