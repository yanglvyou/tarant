import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
function getStyleObj(props) {
    const _styleObj = {};
    const { color, size, type } = props;
    if (color) {
        _styleObj['color'] = color;
    }
    if (size) {
        _styleObj['fontSize'] = Taro.pxTransform(size);
    }
    //set 特殊颜色，不在css写死
    if (type === 'home' ||
        type === 'subject' ||
        type === 'classify' ||
        type === 'cart' ||
        type === 'user') {
        _styleObj['color'] = '#666';
    }
    else if (type === 'grade' || type === 'add-photo' || type === 'check') {
        _styleObj['color'] = '#ccc';
    }
    else if (type === 'collect-selected') {
        _styleObj['color'] = '#f48f18';
    }
    else if (type === 'grade-selected') {
        _styleObj['color'] = '#fab646';
    }
    else if (type === 'record') {
        _styleObj['color'] = '#ff8462';
    }
    return _styleObj;
}
function getClassObject(props) {
    const { type } = props;
    const classObject = {
        [`tarant-icon--${type}`]: type,
    };
    return classObject;
}
function onClick(e, props) {
    var _a;
    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
}
export default function Icon(props) {
    const rootClassName = 'tarant-icon'; //组件
    const classObject = getClassObject(props); //组件修饰
    const styleObject = Object.assign(getStyleObj(props), props.customStyle);
    const { type, className } = props;
    return (React.createElement(View, { className: classNames(rootClassName, classObject, className), style: styleObject, onClick: e => onClick(e, props) },
        type === 'avatar' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }))),
        type === 'delete-input' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'cart' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'cart-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'check-irrevocable' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'check-selected' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'close-h5' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }))),
        type === 'close-native-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'close-native' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'invisible' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'like-selected' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'sort-high' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'sort-low' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'subject-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'subject' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'voice' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'voice-close' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'upload-delete' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }))),
        type === 'classify' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'classify-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }))),
        type === 'share-circle' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }),
            React.createElement(Text, { className: "path6" }))),
        type === 'share-circle-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }),
            React.createElement(Text, { className: "path6" }))),
        type === 'detail-cart-pressed' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'detail-cart' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }))),
        type === 'my-group-buying-select' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }))),
        type === 'shopping-mall-select' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }),
            React.createElement(Text, { className: "path6" }),
            React.createElement(Text, { className: "path7" }))),
        type === 'shopping-mall' && (React.createElement(View, null,
            React.createElement(Text, { className: "path1" }),
            React.createElement(Text, { className: "path2" }),
            React.createElement(Text, { className: "path3" }),
            React.createElement(Text, { className: "path4" }),
            React.createElement(Text, { className: "path5" }),
            React.createElement(Text, { className: "path6" }),
            React.createElement(Text, { className: "path7" })))));
}
Icon.defaultProps = {
    type: '',
    size: 40,
};
Icon.options = {
    addGlobalClass: true,
};
//# sourceMappingURL=index.js.map