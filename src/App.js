import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';

class App extends Component {

  render() {

    console.log(seedColors);

    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual palette</h1>} />
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div >
    );
  }
}

export default App;
