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
    super(props);
    const localCheck = localStorage.getItem('ourPalettes');
    const stickLocal = JSON.parse(localCheck);
    this.state = { palettes: stickLocal || seedColors };

    this.handleSave = this.handleSave.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.storeData = this.storeData.bind(this);
    this.handlePaletteDelete = this.handlePaletteDelete.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  handleSave(passedColorPalette) {
    this.setState(
      {
        palettes: [...this.state.palettes, passedColorPalette]
      },
      () => {
        this.storeData();
      }
    );
  }

  handlePaletteDelete(boxId) {
    // console.log(boxId);
    this.setState(
      {
        palettes: this.state.palettes.filter(p => p.id !== boxId)
      },
      () => {
        this.storeData();
      }
    );
  }

  storeData(passed) {
    localStorage.setItem('ourPalettes', JSON.stringify(this.state.palettes));
  }

  render() {
    // console.log(this.state.palettes);

    return (
      <Switch>
        <Route
          exact
          path="/palette/newpalette"
          render={routeProps => (
            <NewPaletteForm
              {...routeProps}
              palettes={this.state.palettes}
              handleSave={this.handleSave}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
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
          path="/"
          render={routeProps => (
            <PaletteList
              {...routeProps}
              myPalettes={this.state.palettes}
              key={1.2}
              handlePaletteDelete={this.handlePaletteDelete}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
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
