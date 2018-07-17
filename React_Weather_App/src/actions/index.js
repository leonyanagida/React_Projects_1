import axios from 'axios';

const API_KEY = ''; // API KEY HERE //
const ROOT_URL = ''; // ROOT URL HERE //

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Rquest:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
