import { fireEvent, screen } from '@testing-library/react';
import { componentRouter } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRouter(<Sidebar />);
        const btnToggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(btnToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
