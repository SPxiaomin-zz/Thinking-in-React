import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

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

  render() {
    return (
      <div>
        {this.state.city}
        {' '}
        {this.state.weather}
        {' '}
        最低气温 {this.state.lowestTemp}
        {' '}
        最高气温 {this.state.highestTemp}
      </div>
    );
  }
}

export default App;
