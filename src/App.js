import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  state = {
    range: 0
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ range: parseFloat(event.target.value) });
  };
  render() {
    const styleContent = {
      background: `linear-gradient(to bottom right,  #E49DFD, #5058FB)`,
      width: '100vw',
      height: '100vh'
    };
    const styleOverlay = {
      background: 'linear-gradient(65deg,#341b6f 50%,#781991)',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      transform: `translateX(${this.state.range}%)`,
      transition: 'transform 350ms linear'
    };
    const styleSlider = {
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    };
    const styleContainer = {
      position: 'relative'
    };
    return (
      <div style={styleContainer}>
        <div style={styleContent}>
          <ul>
            <li>first</li>
            <li>slider</li>
            <li>conference</li>
          </ul>
        </div>
        <div style={styleOverlay} />
        <input
          style={styleSlider}
          type="range"
          onChange={this.handleChange}
          value={this.state.range}
          min="0"
          max="100"
          step="1"
        />
      </div>
    );
  }
}

export default App;
