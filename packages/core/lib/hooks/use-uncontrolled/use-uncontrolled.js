import * as _ from 'lodash';
import { useCallback, useMemo, useRef } from 'react';
import useForceUpdate from '../use-force-update';
import useToRef from '../use-to-ref';
export default function useUncontrolled(options = {}) {
    const { defaultValue, value: valueProp, onChange } = options;
    const forceUpdate = useForceUpdate();
    //
    const valueRef = useToRef(valueProp);
    const stateRef = useRef(defaultValue !== null && defaultValue !== void 0 ? defaultValue : valueRef.current);
    if (valueRef.current !== undefined) {
        stateRef.current = valueRef.current;
    }
    const setValue = useCallback((newValue, emitChange) => {
        var _a;
        // When state was changed,
        // does set value and trigger onChange event
        const changed = stateRef.current !== newValue;
        if (changed) {
            if (_.isUndefined(valueRef.current)) {
                stateRef.current = newValue;
                forceUpdate();
            }
            (_a = (emitChange !== null && emitChange !== void 0 ? emitChange : onChange)) === null || _a === void 0 ? void 0 : _a(newValue);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange]);
    const getValue = useCallback(() => stateRef.current, []);
    return useMemo(() => ({
        value: stateRef.current,
        getValue,
        setValue,
    }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stateRef.current, getValue, setValue]);
}
//# sourceMappingURL=use-uncontrolled.js.map