import { render } from '@testing-library/react';
import React from 'react';
import LocationInfo from './LocationInfo';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
}));
describe('Location info', () => {
    it('should render loading', async () => {
        const { container } = render(<LocationInfo />)
        expect(container).toBeInTheDocument()
        const loading = container.querySelector('.loading')
        expect(loading).toBeInTheDocument()
    });


});
