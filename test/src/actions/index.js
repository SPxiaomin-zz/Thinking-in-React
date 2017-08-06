import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from '../utils/types';

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
});

export const fetchWeatherFailure = () => ({
  type: FETCH_FAILURE
});

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    dispatch(fetchWeatherStarted());

    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Fail to get response with status ${response.status}`);
      }

      response.json().then((responseJson) => {
        dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        dispatch(fetchWeatherFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchWeatherFailure(error));
    });;
  };
};
