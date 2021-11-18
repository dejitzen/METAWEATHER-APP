import { render } from '@testing-library/react';
import React from 'react';
import WeatherCard from './WeatherCard'

describe('WeatherCard', () => {
    const testWeatherData = {
        air_pressure: 1023,
        applicable_date: "2021-11-18",
        created: "2021-11-18T13:59:34.367752Z",
        humidity: 66,
        id: 5628383053479936,
        max_temp: 17.555,
        min_temp: 10.02,
        predictability: 70,
        the_temp: 16.26,
        visibility: 13.506124234470692,
        weather_state_abbr: "lc",
        weather_state_name: "Light Cloud",
        wind_direction: 12.266575665741497,
        wind_direction_compass: "NNE",
        wind_speed: 2.415000992637663,
    }
    it('should render weathercard', async () => {
        const { container } = render(<WeatherCard data={testWeatherData} />)
        expect(container).toBeInTheDocument()
    });
})