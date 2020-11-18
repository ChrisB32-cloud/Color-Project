import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';



class SingleColorPalette extends Component {

    constructor(props) {
        super(props)

        this.state = { format: 'hex' }

        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.changeFormat = this.changeFormat.bind(this)
        // console.log(this._shades);
    }

    gatherShades(palette, colorIdCheck) {
        let singleRange = []
        let allColors = palette.colors

        for (let c in allColors) {
            singleRange = singleRange.concat(
                allColors[c].filter(color => color.id === colorIdCheck)
            )
        }
        return singleRange.slice(1)
    }

    changeFormat(pass) {
        this.setState({ format: pass })
    }


    render() {

        const { classes } = this.props
        const { format } = this.state
        const colorBoxes = this._shades.map(shade => (
            <ColorBox
                key={shade.name}
                name={shade.name}
                boxColor={shade[format]}
                showingFullPalette={false}
            />
        ))

        return (
            <div className={classes.Palette}>
                <NavBar
                    handleChange={this.changeFormat}
                    showSlider={false}
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link exact to={`/palette/${this.props.palette.id}`} >Go Back
                        </Link>
                    </div>
                </div>
                <PaletteFooter
                    paletteNames={this.props.palette.paletteName}
                    emojis={this.props.palette.emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);