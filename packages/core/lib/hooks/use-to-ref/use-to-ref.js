import { useRef } from 'react';
export default function useToRef(value) {
    const stateRef = useRef();
    stateRef.current = value;
    return stateRef;
}
//# sourceMappingURL=use-to-ref.js.map