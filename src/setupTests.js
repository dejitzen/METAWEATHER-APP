// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import axios from 'axios';

configure({ adapter: new Adapter() });
axios.defaults.adapter = require('axios/lib/adapters/http');

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success) => Promise.resolve(success({
            coords: {
                latitude: 51.1,
                longitude: 45.3
            }
        })))
};
global.navigator.geolocation = mockGeolocation;