import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import NavBar from './NavBar';


const styles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
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

        const colorBoxes = this._shades.map(shade => (
            <ColorBox
                key={shade.id}
                name={shade.name}
                boxColor={shade.hex}
                showLink={false}
            />
        ))

        return (
            <div className='Palette'>
                <NavBar
                    handleChange={this.changeFormat}
                    showLink={false}
                />
                {/* <h1>Our single color palette Component</h1> */}
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;