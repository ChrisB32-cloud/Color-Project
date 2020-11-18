import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';


const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: props => props.showingFullPalette === true ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        opacity: '1',
        backgroundColor: 'black',
        "& a": {
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none',
        }
    }
}



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

        // console.log(this.props);
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
                {/* <h1>Our single color palette Component</h1> */}
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