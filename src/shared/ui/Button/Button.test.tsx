import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from './Button';

describe('ui>Button', () => {
    test('Button render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Button.clear render', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
