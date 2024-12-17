import { FunctionComponent } from 'react';
import ButtonComponent from './button';
import ButtonContent from './button-content';
import ButtonGroup from './button-group';
import { ButtonInterface } from '../../../types/button';

export { createButton } from './button';
export { default as ButtonContext } from './button.context';

const Button = ButtonComponent as ButtonInterface;

Button.Content = ButtonContent;
Button.Group = ButtonGroup;

export default Button;
