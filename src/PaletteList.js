import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transOut: false
    };

    // this.goToPalette = this.goToPalette.bind(this)
    this.handleTransition = this.handleTransition.bind(this);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleTransition(bool) {
    this.setState({ transOut: bool });
    setTimeout(() => {
      this.setState({ transOut: false });
    }, 500);
  }

  render() {
    // console.log(this.props);
    const { myPalettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Color</h1>
            <Link className={classes.createLink} exact to="/palette/newpalette">
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {myPalettes.map((p, idx) => (
              <CSSTransition
                key={p.id}
                classNames="fade"
                timeout={500}
                onExited={this.state.transOut}
              >
                <MiniPalette
                  {...p}
                  key={idx}
                  handlePaletteDelete={this.props.handlePaletteDelete}
                  myPaletteFunction={() => this.goToPalette(p.id)}
                  handleTransition={this.handleTransition}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);

//
