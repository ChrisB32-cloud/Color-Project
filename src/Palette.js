import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css'
import NavBar from './NavBar';


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

        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map((myColor) => (
            <ColorBox boxColor={myColor[format]} name={myColor.name} key={myColor.id} paletteId={id} colorId={myColor.id} />
        ))
        // console.log(this.props);

        return (
            <div className='Palette' >
                <NavBar changeLevel={this.state.level} function={this.changeLevel} handleChange={this.changeFormat} />
                <div className='Palette-colors' >
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'  >
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;