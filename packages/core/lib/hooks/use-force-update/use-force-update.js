import { useReducer } from 'react';
const updateReducer = (num) => (num + 1) % 1000000;
function useForceUpdate() {
    const [, update] = useReducer(updateReducer, 0);
    return update;
}
export default useForceUpdate;
//# sourceMappingURL=use-force-update.js.map