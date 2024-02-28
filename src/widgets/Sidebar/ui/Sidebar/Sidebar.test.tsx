import { describe } from 'node:test';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

void describe('Sidebar Test', () => {
    test('sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
