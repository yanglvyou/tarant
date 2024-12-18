import { useEffect } from 'react';
import { getScrollParent } from './scroll';
import { preventDefault } from './event';
import { supportsPassive } from './supports-passive';
import { useTouch } from '../touch';
let totalLockCount = 0;
const BODY_LOCK_CLASS = 'tarant-popup-overflow-hidden';
// https://github.com/youzan/vant/blob/HEAD/packages/vant/src/composables/use-lock-scroll.ts
export function useLockScroll(rootRef, shouldLock) {
    const touch = useTouch();
    const DIRECTION_UP = '01';
    const DIRECTION_DOWN = '10';
    const onTouchMove = async (event) => {
        touch.move(event);
        const direction = touch.deltaY > 0 ? DIRECTION_DOWN : DIRECTION_UP;
        const el = await getScrollParent(event.target, rootRef.current);
        if (!el)
            return;
        const { scrollHeight, offsetHeight, scrollTop } = el;
        let status = '11';
        if (scrollTop === 0) {
            status = offsetHeight >= scrollHeight ? '00' : '01';
        }
        else if (scrollTop + offsetHeight >= scrollHeight) {
            status = '10';
        }
        if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
            preventDefault(event, true);
        }
    };
    const lock = () => {
        document.addEventListener('touchstart', touch.start);
        document.addEventListener('touchmove', onTouchMove, supportsPassive ? { passive: false } : false);
        if (!totalLockCount) {
            document.body.classList.add(BODY_LOCK_CLASS);
        }
        totalLockCount++;
    };
    const unlock = () => {
        if (totalLockCount) {
            document.removeEventListener('touchstart', touch.start);
            document.removeEventListener('touchmove', onTouchMove);
            totalLockCount--;
            if (!totalLockCount) {
                document.body.classList.remove(BODY_LOCK_CLASS);
            }
        }
    };
    useEffect(() => {
        if (shouldLock) {
            lock();
            return () => {
                unlock();
            };
        }
    }, [shouldLock]);
}
//# sourceMappingURL=use-lock-scroll.js.map