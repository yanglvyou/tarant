import { inBrowser } from '../base';
import { elementUnref, queryNodesRef } from './element';
export function getComputedStyle(elementOrRef, computedStyle) {
    const element = elementUnref(elementOrRef);
    if (element) {
        if (inBrowser) {
            return Promise.resolve(window.getComputedStyle(element));
        }
        else {
            return new Promise(resolve => {
                queryNodesRef(element)
                    .fields({
                    computedStyle,
                }, result => resolve(result))
                    .exec();
            });
        }
    }
    return Promise.resolve({});
}
//# sourceMappingURL=computed-style.js.map