import React from 'react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../../renderWithRouter';
import Weather from './Weather';

const mockedUsedNavigate = jest.fn();
const mockData = { "consolidated_weather": [{ "id": 5628383053479936, "weather_state_name": "Light Cloud", "weather_state_abbr": "lc", "wind_direction_compass": "NNE", "created": "2021-11-18T13:59:34.367752Z", "applicable_date": "2021-11-18", "min_temp": 10.02, "max_temp": 17.555, "the_temp": 16.26, "wind_speed": 2.415000992637663, "wind_direction": 12.266575665741497, "air_pressure": 1023.0, "humidity": 66, "visibility": 13.506124234470692, "predictability": 70 }, { "id": 6594687218483200, "weather_state_name": "Heavy Cloud", "weather_state_abbr": "hc", "wind_direction_compass": "N", "created": "2021-11-18T13:59:37.567257Z", "applicable_date": "2021-11-19", "min_temp": 11.07, "max_temp": 17.47, "the_temp": 15.89, "wind_speed": 4.461651363864366, "wind_direction": 9.5, "air_pressure": 1022.5, "humidity": 69, "visibility": 10.814965600890798, "predictability": 71 }, { "id": 4989894599376896, "weather_state_name": "Heavy Cloud", "weather_state_abbr": "hc", "wind_direction_compass": "N", "created": "2021-11-18T13:59:40.354706Z", "applicable_date": "2021-11-20", "min_temp": 10.365, "max_temp": 17.02, "the_temp": 15.17, "wind_speed": 6.840925546273762, "wind_direction": 356.0, "air_pressure": 1020.0, "humidity": 61, "visibility": 12.757061262228586, "predictability": 71 }, { "id": 4987022365163520, "weather_state_name": "Clear", "weather_state_abbr": "c", "wind_direction_compass": "N", "created": "2021-11-18T13:59:43.353679Z", "applicable_date": "2021-11-21", "min_temp": 10.745000000000001, "max_temp": 18.634999999999998, "the_temp": 16.85, "wind_speed": 4.201449335305814, "wind_direction": 351.86454672468653, "air_pressure": 1017.5, "humidity": 66, "visibility": 13.428763521037142, "predictability": 68 }, { "id": 5538408899280896, "weather_state_name": "Light Rain", "weather_state_abbr": "lr", "wind_direction_compass": "S", "created": "2021-11-18T13:59:47.063399Z", "applicable_date": "2021-11-22", "min_temp": 12.895, "max_temp": 18.685000000000002, "the_temp": 17.995, "wind_speed": 4.190314934905486, "wind_direction": 183.78981394977933, "air_pressure": 1015.5, "humidity": 75, "visibility": 12.314023602163367, "predictability": 75 }, { "id": 5593114191331328, "weather_state_name": "Heavy Rain", "weather_state_abbr": "hr", "wind_direction_compass": "NNE", "created": "2021-11-18T13:59:49.476492Z", "applicable_date": "2021-11-23", "min_temp": 13.64, "max_temp": 19.295, "the_temp": 17.12, "wind_speed": 2.6504539489382006, "wind_direction": 16.500000000000004, "air_pressure": 1016.0, "humidity": 79, "visibility": 9.999726596675416, "predictability": 77 }], "time": "2021-11-18T18:34:53.576169+02:00", "sun_rise": "2021-11-18T07:08:54.496868+02:00", "sun_set": "2021-11-18T17:11:13.090464+02:00", "timezone_name": "LMT", "parent": { "title": "Greece", "location_type": "Country", "woeid": 23424833, "latt_long": "39.072449,21.845560" }, "sources": [{ "title": "BBC", "slug": "bbc", "url": "http://www.bbc.co.uk/weather/", "crawl_rate": 360 }, { "title": "Forecast.io", "slug": "forecast-io", "url": "http://forecast.io/", "crawl_rate": 480 }, { "title": "HAMweather", "slug": "hamweather", "url": "http://www.hamweather.com/", "crawl_rate": 360 }, { "title": "Met Office", "slug": "met-office", "url": "http://www.metoffice.gov.uk/", "crawl_rate": 180 }, { "title": "OpenWeatherMap", "slug": "openweathermap", "url": "http://openweathermap.org/", "crawl_rate": 360 }, { "title": "Weather Underground", "slug": "wunderground", "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b", "crawl_rate": 720 }, { "title": "World Weather Online", "slug": "world-weather-online", "url": "http://www.worldweatheronline.com/", "crawl_rate": 360 }], "title": "Athens", "location_type": "City", "woeid": 946738, "latt_long": "37.976151,23.736410", "timezone": "Europe/Athens" }
beforeEach(() => {
    jest.mock('react-router', () => ({
        ...jest.requireActual('react-router'),
        useNavigate: () => mockedUsedNavigate,
        useParams: jest.fn().mockReturnValue({ woeid: '839722' }),
        useRouteMatch: () => ({ url: '/weather/839722' }),
    }));
    jest.mock("axios", () => ({
        get: jest.fn().mockImplementation(() => Promise.resolve({ data: mockData }))
    }))
})

describe('Weather info', () => {
    act(() => {
        it('should render loading', async () => {
            const { container } = renderWithRouter(<Weather />, { route: '/weather/839722', history: { location: '/weather/839722' } })
            const loading = container.querySelector('.loading');
            expect(loading).toBeInTheDocument()
        })
    });
    it('should render weather cards', () => {
        act(async () => {
            const { container } = renderWithRouter(<Weather />, { route: '/weather/839722', history: { location: '/weather/839722' } })
            const weatherWrapper = container.querySelector('.weather-wrapper');
            const weatherList = container.querySelector('.weather-list')
            const backBtn = container.querySelector('b')
            expect(weatherWrapper).toBeInTheDocument()

        })
        // expect(weatherWrapper).toBeInTheDocument()
        // expect(weatherList).toBeInTheDocument()
        // expect(axios.get).toHaveBeenCalledTimes(1)
        // // backBtn.click();
    })
});
