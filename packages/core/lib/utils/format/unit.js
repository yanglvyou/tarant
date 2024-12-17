import { getSystemInfoSync } from '@tarojs/taro';
import * as _ from 'lodash';
export function addUnitPx(value) {
    return value === undefined ? '' : `${unitToPx(value)}px`;
}
export function getSizeStyle(originSize) {
    if (_.isNumber(originSize) || _.isString(originSize)) {
        const size = addUnitPx(originSize);
        return {
            width: size,
            height: size,
        };
    }
    return {};
}
export function getZIndexStyle(zIndex) {
    const style = {};
    if (zIndex !== undefined) {
        style.zIndex = +zIndex;
    }
    return style;
}
// cache
let rootFontSize;
function getRootFontSize() {
    if (!rootFontSize) {
        const doc = document.documentElement;
        const fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
        rootFontSize = parseFloat(fontSize);
    }
    return rootFontSize;
}
function convertRpx(value) {
    value = value.replace(/rpx/g, '');
    const { windowWidth } = getSystemInfoSync();
    const pixelRatio = 750 / windowWidth;
    return +value / pixelRatio;
}
function convertPx(value) {
    value = value.replace(/px/g, '');
    return +value;
}
function convertRem(value) {
    value = value.replace(/rem/g, '');
    return +value * getRootFontSize();
}
function convertVw(value) {
    value = value.replace(/vw/g, '');
    return (+value * window.innerWidth) / 100;
}
function convertVh(value) {
    value = value.replace(/vh/g, '');
    return (+value * window.innerHeight) / 100;
}
export function unitToPx(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (value.includes('rpx')) {
        return convertRpx(value);
    }
    if (value.includes('px')) {
        return convertPx(value);
    }
    if (value.includes('rem')) {
        return convertRem(value);
    }
    if (value.includes('vw')) {
        return convertVw(value);
    }
    if (value.includes('vh')) {
        return convertVh(value);
    }
    return parseFloat(value);
}
//# sourceMappingURL=unit.js.map