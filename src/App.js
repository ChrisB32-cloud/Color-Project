import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Palette from './Palette';
import seedColors from './seedColor';
import { generatePalette } from './colorHelper';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AppStyles';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

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
            <div className="page">
              <NewPaletteForm
                {...routeProps}
                palettes={this.state.palettes}
                handleSave={this.handleSave}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <div className="page">
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <div className="page">
              <PaletteList
                {...routeProps}
                myPalettes={this.state.palettes}
                key={1.2}
                handlePaletteDelete={this.handlePaletteDelete}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <div className="page">
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default withStyles(styles)(App);

{
  /* <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/newpalette"
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm
                        {...routeProps}
                        palettes={this.state.palettes}
                        handleSave={this.handleSave}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        {...routeProps}
                        myPalettes={this.state.palettes}
                        key={1.2}
                        handlePaletteDelete={this.handlePaletteDelete}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      /> */
}
