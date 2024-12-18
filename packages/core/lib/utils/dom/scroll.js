import { createSelectorQuery } from '@tarojs/taro';
import { getComputedStyle } from './computed-style';
import { elementUnref, isRootElement, queryNodesRef } from './element';
import { inBrowser } from '../base';
const defaultRoot = inBrowser
    ? window
    : undefined;
const ELEMENT_NODE_TYPE = 1;
const overflowScrollReg = /scroll|auto/i;
function isElementNode(node) {
    return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}
// https://github.com/youzan/vant/issues/3823
export async function getScrollParent(elementOrRef, root = defaultRoot) {
    let node = elementUnref(elementOrRef);
    while (node && node !== root && isElementNode(node)) {
        const { overflowY } = await getComputedStyle(node, ['overflowY']);
        if (overflowScrollReg.test(overflowY)) {
            return node;
        }
        // Is root element
        if (isRootElement(node)) {
            return node;
        }
        node = node.parentNode;
    }
    return root;
}
export function getRootScrollTop() {
    return new Promise(resolve => {
        if (inBrowser) {
            resolve(window.pageYOffset || //
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0);
        }
        else {
            createSelectorQuery()
                .selectViewport()
                .scrollOffset(({ scrollTop }) => resolve(scrollTop))
                .exec();
        }
    });
}
function makeScrollOffset() {
    return {
        scrollTop: 0,
        scrollLeft: 0,
    };
}
export function getScrollOffset(elementOrRef) {
    const element = elementUnref(elementOrRef);
    if (element) {
        if (inBrowser) {
            const $element = element;
            const top = 'scrollTop' in element ? $element.scrollTop : $element['pageYOffset'];
            const left = 'scrollLeft' in element ? $element.scrollLeft : $element['pageXOffset'];
            return Promise.resolve({
                scrollTop: Math.max(top, 0),
                scrollLeft: Math.max(left, 0),
            });
        }
        else {
            return new Promise(resolve => {
                queryNodesRef(element).scrollOffset(resolve).exec();
            });
        }
    }
    return Promise.resolve(makeScrollOffset());
}
export function getScrollTop(elementOrRef) {
    return getScrollOffset(elementOrRef).then(({ scrollTop }) => scrollTop);
}
//# sourceMappingURL=scroll.js.map