import { canUseDom } from './can-use-dom';
export let supportsPassive = false;
if (canUseDom) {
    try {
        const opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            },
        });
        window.addEventListener('testPassive', null, opts);
    }
    catch (e) { }
}
//# sourceMappingURL=supports-passive.js.map