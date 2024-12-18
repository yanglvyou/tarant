import { createSelectorQuery, getCurrentInstance, useRouter } from '@tarojs/taro';
import * as _ from 'lodash';
import { inWechat } from '../base';
export const ELEMENT_NODE_TYPE = 1;
export function isWindow(val) {
    return val === window;
}
export function isBodyElement(val) {
    return val === document.body;
}
export function isRootElement(node) {
    return (node === null || node === void 0 ? void 0 : node.nodeType) === ELEMENT_NODE_TYPE && (node === null || node === void 0 ? void 0 : node.tagName) === 'ROOT';
}
export function isBlockElement(node) {
    return (node === null || node === void 0 ? void 0 : node.nodeType) === ELEMENT_NODE_TYPE && (node === null || node === void 0 ? void 0 : node.tagName) === 'BLOCK';
}
export function elementUnref(elementOrRef) {
    if (elementOrRef === undefined || elementOrRef === null) {
        return elementOrRef;
    }
    if ('current' in elementOrRef) {
        return elementOrRef.current;
    }
    return elementOrRef;
}
export function matchSelector(aSelector, bSelector) {
    return aSelector === bSelector;
}
export function getElementSelector(id, className) {
    const selectors = [];
    if (!_.isEmpty(id)) {
        selectors.push(`#${id}`);
    }
    if (!_.isEmpty(className)) {
        selectors.push(_.split(className, ' ').join('.'));
    }
    return selectors.join('.');
}
export function prependPageSelector(selector) {
    var _a;
    const path = (_a = getCurrentInstance().router) === null || _a === void 0 ? void 0 : _a.path;
    return path ? `${path}__${selector}` : selector;
}
export function usePrependPageSelector(selector) {
    const { path } = useRouter();
    return path ? `${path}__${selector}` : selector;
}
// Fix nested in CustomWrapper is undefined
// See: https://github.com/mallfoundry/taroify/pull/143
// Fix nested in a Block element does not query elements
// See: https://github.com/mallfoundry/taroify/pull/370
function getAncestorWrapper(element) {
    if (inWechat) {
        let ancestor = element;
        for (let cursor = element; !_.isEmpty(cursor.parentNode);) {
            if (isRootElement(cursor.parentNode)) {
                break;
            }
            if (!isBlockElement(cursor.parentNode)) {
                ancestor = cursor.parentNode;
            }
            cursor = cursor.parentNode;
        }
        if (ancestor && ancestor !== element) {
            return ancestor;
        }
    }
}
export function queryNodesRef(element) {
    if (isRootElement(element)) {
        return createSelectorQuery().selectViewport();
    }
    const ancestor = getAncestorWrapper(element);
    if (ancestor) {
        return createSelectorQuery().select(`#${ancestor.uid}>>>#${element.uid}`);
    }
    return createSelectorQuery().select('#' + element.uid);
}
export function queryAllNodesRef(element, selector) {
    if (isRootElement(element)) {
        return createSelectorQuery().selectViewport();
    }
    const ancestor = getAncestorWrapper(element);
    if (ancestor) {
        return createSelectorQuery().selectAll(`#${ancestor.uid}>>>#${element.uid} ${selector}`);
    }
    return createSelectorQuery().selectAll('#' + element.uid + selector);
}
//# sourceMappingURL=element.js.map