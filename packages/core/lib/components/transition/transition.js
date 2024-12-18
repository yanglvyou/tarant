import * as React from 'react';
import { isValidElement, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { prefixClassname } from '../../utils/prefix';
export var TransitionName;
(function (TransitionName) {
    TransitionName["Fade"] = "fade";
    TransitionName["SlideUp"] = "slide-up";
    TransitionName["SlideDown"] = "slide-down";
    TransitionName["SlideLeft"] = "slide-left";
    TransitionName["SlideRight"] = "slide-right";
})(TransitionName || (TransitionName = {}));
export const DEFAULT_FADE_TRANSITION_DURATION = 300;
const TRANSITION_PRESETS = [
    TransitionName.Fade,
    TransitionName.SlideUp,
    TransitionName.SlideDown,
    TransitionName.SlideLeft,
    TransitionName.SlideRight,
];
function isTransitionPreset(name) {
    return name && TRANSITION_PRESETS.includes(name);
}
function useElementStyle(children) {
    return useMemo(() => {
        if (!isValidElement(children)) {
            return {};
        }
        const element = children;
        const { style } = element.props;
        return style !== null && style !== void 0 ? style : {};
    }, [children]);
}
export default function Transition(props) {
    const { name, in: inProp = false, appear = false, mountOnEnter = false, unmountOnExit, timeout = 300, children: childrenProp, onEnter, onEntering, onEntered, onExit, onExiting, onExited, } = props;
    const children = useMemo(() => childrenProp, [childrenProp]);
    const childrenStyle = useElementStyle(children);
    const transactionName = isTransitionPreset(name) ? prefixClassname(`transition-${name}`) : name;
    const [enter, setEnter] = useState(false);
    const [exited, setExited] = useState(false);
    return (React.createElement(CSSTransition, { in: inProp, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit, timeout: timeout, appear: appear, classNames: transactionName, style: Object.assign(Object.assign({}, childrenStyle), { display: enter && !exited ? '' : 'none' }), children: children, onEnter: (node, isAppearing) => {
            setEnter(true);
            setExited(false);
            // @ts-ignore
            onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, isAppearing);
        }, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: node => {
            setEnter(false);
            setExited(true);
            // @ts-ignore
            onExited === null || onExited === void 0 ? void 0 : onExited(node);
        } }));
}
//# sourceMappingURL=transition.js.map