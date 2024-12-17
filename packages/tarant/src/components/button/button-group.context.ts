import { createContext } from 'react';
import { ButtonGroupContextValue } from '../../../types/button';

const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

export default ButtonGroupContext;
