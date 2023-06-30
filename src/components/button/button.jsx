import {
    BaseButton,
    InvertedButton,
    PaymentButton
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    inverted: 'inverted',
    payment: 'payment',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.payment]: PaymentButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;