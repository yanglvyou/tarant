import * as _ from 'lodash';
import { isValidElement } from 'react';
export function isNoneElement(node) {
    return _.isUndefined(node) || _.isNull(node);
}
export function isTextElement(node) {
    return _.isNumber(node) || _.isString(node);
}
export function isObjectElement(node) {
    return !isValidElement(node) && _.isObject(node) && !_.isArray(node);
}
export function isElementOf(node, type) {
    if (isValidElement(node)) {
        const element = node;
        if (element.type === type) {
            return true;
        }
        const displayName = _.get(element.type, 'displayName');
        if (_.isFunction(element.type) &&
            !_.isEmpty(displayName) &&
            _.endsWith(displayName, _.get(type, 'displayName'))) {
            return true;
        }
    }
    return false;
}
export const isDef = (val) => val !== undefined && val !== null;
//# sourceMappingURL=index.js.map