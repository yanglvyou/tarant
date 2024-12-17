import * as _ from 'lodash';
import { Children as ReactChildren } from 'react';
import { isObjectElement } from './validate';
function isObjectChildren(children) {
    if (!_.isArray(children)) {
        return false;
    }
    const node = _.first(children);
    return isObjectElement(node);
}
function forEachChildren(children, fn) {
    const objectified = isObjectChildren(children);
    const forEach = objectified ? _.forEach : ReactChildren.forEach;
    return forEach(children, fn);
}
function mapChildren(children, fn) {
    const objectified = isObjectChildren(children);
    const map = objectified ? _.map : ReactChildren.map;
    const result = map(children, fn);
    return result;
}
const Children = {
    toArray: ReactChildren.toArray,
    forEach: forEachChildren,
    map: mapChildren,
};
export default Children;
//# sourceMappingURL=children.js.map