import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
// import { withStyles } from '@material-ui/styles';
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

        // console.log(this.props);

        const { format } = this.state
        const colorBoxes = this._shades.map(shade => (
            <ColorBox
                key={shade.name}
                name={shade.name}
                boxColor={shade[format]}
                showLink={false}
            />
        ))

        // console.log(this.props);

        return (
            <div className='SingleColorBox Palette'>
                <NavBar
                    handleChange={this.changeFormat}
                    showSlider={false}
                />
                {/* <h1>Our single color palette Component</h1> */}
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'> <Link exact to={`/palette/${this.props.palette.id}`} className='back-button'>Go Back</Link> </div>
                </div>
                <PaletteFooter
                    paletteNames={this.props.palette.paletteName}
                    emojis={this.props.palette.emoji}
                />
            </div>
        );
    }
}

export default SingleColorPalette;