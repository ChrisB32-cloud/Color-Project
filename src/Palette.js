import React, { Component } from 'react';
import NavBar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';



// --IMPORTANT!!!!-- The library style must come before our styles, else our styles
//                   will overide the styles we want to change from the library.


class Palette extends Component {

    constructor(props) {
        super(props)

        this.state = { level: 500, format: 'hex' }

        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel })

    }

    changeFormat(pass) {
        this.setState({ format: pass })
    }


    render() {

        const { classes } = this.props

        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map((myColor) => (
            <ColorBox
                boxColor={myColor[format]}
                name={myColor.name}
                key={myColor.id}
                paletteId={id}
                colorId={myColor.id}
                showingFullPalette={true}
            />
        ))
        return (
            <div className={classes.Palette} >
                <NavBar
                    myLevel={this.state.level}
                    function={this.changeLevel}
                    handleChange={this.changeFormat}
                    showSlider={true}
                />
                <div className={classes.PaletteColors} >
                    {colorBoxes}
                </div>
                <PaletteFooter
                    paletteNames={paletteName}
                    emojis={emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);