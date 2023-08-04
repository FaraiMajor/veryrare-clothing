import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button';

describe('button tests', () => {
    test('should render base button when nothing is passed', () => {
        render(<Button>Test</Button>);

        expect(screen.getByRole('button')).toHaveStyle('background-color: white');
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    test('should render inverted button when passed inverted type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);

        expect(screen.getByRole('button')).toHaveStyle('background-color: black');
    });
    test('should render button when passed payment type', () => {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.payment}>Test</Button>)
        expect(screen.getByRole('button')).toHaveStyle('background-color: white');
    })
});  