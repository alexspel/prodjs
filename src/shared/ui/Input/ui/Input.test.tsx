import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('ui>Input', () => {
    test('Input render', () => {
        render(<Input />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
