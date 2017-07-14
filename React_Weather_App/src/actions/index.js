import axios from 'axios';

const API_KEY = '6d33d2d4d045a5c858de382413ac0a35';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

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
