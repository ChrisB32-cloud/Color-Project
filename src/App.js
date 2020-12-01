import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {

  constructor(props) {
    super(props)

    this.handleSave = this.handleSave.bind(this)

  }

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  handleSave(passedColorPalette) {
    console.log(passedColorPalette);
  }

  render() {

    // console.log(seedColors);

    return (
      <Switch>
        <Route
          exact
          path='/palette/newpalette'
          render={(routeProps) =>
            <NewPaletteForm {...routeProps} handleSave={this.handleSave} />}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={(routeProps) =>
            <PaletteList {...routeProps} myPalettes={seedColors} key={1.2} />}
        />
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
