import { inBrowser } from '../base';
import { queryNodesRef, elementUnref, isRootElement, isWindow, queryAllNodesRef } from './element';
export function makeRect(width, height) {
    return {
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        width,
        height,
    };
}
export function getRect(elementOrRef) {
    const element = elementUnref(elementOrRef);
    if (element) {
        if (inBrowser) {
            if (isWindow(element)) {
                const width = element.innerWidth;
                const height = element.innerHeight;
                return Promise.resolve(makeRect(width, height));
            }
            return Promise.resolve(element.getBoundingClientRect());
        }
        else {
            return new Promise(resolve => {
                queryNodesRef(element)
                    .boundingClientRect()
                    .exec(([rect]) => {
                    if (isRootElement(element)) {
                        const { width, height } = rect;
                        resolve(makeRect(width, height));
                    }
                    else {
                        resolve(rect);
                    }
                });
            });
        }
    }
    return Promise.resolve(makeRect(0, 0));
}
export function getRects(elementOrRef, selector) {
    const element = elementUnref(elementOrRef);
    if (element) {
        if (inBrowser) {
            const rects = [];
            element
                .querySelectorAll(selector)
                .forEach(oneElement => rects.push(oneElement.getBoundingClientRect()));
            return Promise.resolve(rects);
        }
        else {
            return new Promise(resolve => {
                queryAllNodesRef(element, selector)
                    .boundingClientRect()
                    .exec(([rects]) => resolve(rects));
            });
        }
    }
    return Promise.resolve([]);
}
//# sourceMappingURL=rect.js.map