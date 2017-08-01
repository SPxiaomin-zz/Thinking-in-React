import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Status from './status';

import { fetchWeather } from './actions.js';

class App extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    let {status, cityName, weather, lowestTemp, highestTemp} = this.props;

    switch (status) {
      case Status.LOADING: {
        return <div>天气信息请求中...</div>;
      }
      case Status.SUCCESS: {
        return (
          <div>
            {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
          </div>
        )
      }
      case Status.FAILURE: {
        return <div>天气信息装载失败</div>
      }
      default: {
        throw new Error('unexpected status ' + status);
      }
    }
  }
}

App.propTypes = {
  status: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  weather: PropTypes.string,
  lowestTemp: PropTypes.string,
  highestTemp: PropTypes.string
};

const mapStateToProps = (state) => {
  const weatherData = state;
  console.log(weatherData);

  return {
    status: weatherData.status,
    cityName: weatherData.city,
    weather: weatherData.weather,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => {
      dispatch(fetchWeather(101020100));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
