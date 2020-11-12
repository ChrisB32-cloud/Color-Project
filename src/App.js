import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';

class App extends Component {

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {

    // console.log(seedColors);

    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList {...routeProps} myPalettes={seedColors} />} />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />

      </Switch>
    );
  }
}

export default App;
