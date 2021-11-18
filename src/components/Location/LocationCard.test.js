import { mount } from 'enzyme';
import React from 'react';
import LocationCard from './LocationCard';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
}));
describe('LocationCard', () => {
    const testLocationData = {
        distance: 327035,
        latt_long: "42.697079,23.324551",
        location_type: "City",
        title: "Sofia",
        woeid: 839722
    }

    it('should render LocationCard', async () => {
        const container = mount(<LocationCard data={testLocationData} />)
        expect(container.find('.location-card').exists()).toBeTruthy()
        container.simulate('click');
        expect(mockedUsedNavigate).toHaveBeenCalledWith(`/weather/${testLocationData.woeid}`)
    });
})