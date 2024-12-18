import { inBrowser } from '../base';
export function stopPropagation(event) {
    event.stopPropagation();
}
export function preventDefault(event, isStopPropagation) {
    if (inBrowser) {
        // @ts-ignore
        if (typeof event.cancelable !== 'boolean' || event.cancelable) {
            event.preventDefault();
        }
    }
    else {
        event.preventDefault();
    }
    if (isStopPropagation) {
        stopPropagation(event);
    }
}
export function getClientCoordinates(event) {
    // @ts-ignore
    const { clientX, clientY, detail = {}, touches = [] } = event;
    if (clientX && clientY) {
        return {
            clientX,
            clientY,
        };
    }
    return touches[0] || { clientX: detail.x || detail.clientX, clientY: detail.y || detail.clientY };
}
//# sourceMappingURL=event.js.map