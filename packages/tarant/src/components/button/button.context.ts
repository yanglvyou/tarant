import { createContext } from 'react';
import { ButtonContextValue } from '../../../types/button';

const ButtonContext = createContext<ButtonContextValue>({});

export default ButtonContext;
