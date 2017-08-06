import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { connect } from 'react-redux';
import * as Status from '../../utils/status';
import { fetchWeather } from '../../actions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '上海',
      weather: '多云',
      lowestTemp: '6℃',
      highestTemp: '16℃'
    };
  }

  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    let { status, city, weather, lowestTemp, highestTemp } = this.props;

    switch (status) {
      case Status.LOADING:
        return <div>天气信息请求中...</div>;
      case Status.SUCCESS:
        return (
          <div>
            {city} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
          </div>
        );
      case Status.FAILURE:
        return <div>天气信息装载失败</div>;
      default:
        throw new Error(`unexpected status ${status}`);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    city: state.city,
    weather: state.weather,
    lowestTemp: state.temp1,
    highestTemp: state.temp2
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
