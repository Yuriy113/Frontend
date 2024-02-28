import { describe } from 'node:test';
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

void describe('Button Test', () => {
    test('render button', () => {
        render(<Button>TestBtn</Button>);
        expect(screen.getByText('TestBtn')).toBeInTheDocument();
    });
    test('render button with classname', () => {
        render(<Button theme={ThemeButton.CLEAR}>TestBtn</Button>);
        expect(screen.getByText('TestBtn')).toHaveClass('clear');
        // screen.debug();
    });
});
