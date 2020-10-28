import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColor'

class App extends Component {

  render() {
    return (
      <div >
        <Palette {...seedColors[4]} />
      </div >
    );
  }
}

export default App;
