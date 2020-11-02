import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css'
import NavBar from './NavBar';

// --IMPORTANT!!!!-- The library style must come before our styles, else our styles
//                   will overide the styles we want to change from the library.

class Palette extends Component {

    constructor(props) {
        super(props)

        this.state = { level: 500 }

        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel })

    }


    render() {

        const { colors } = this.props.palette

        const colorBoxes = colors[this.state.level].map((myColor, idx) => (
            <ColorBox boxColor={myColor} key={idx} />
        ))

        // console.log(this.state.level);

        return (
            <div className='Palette' >
                {/* NavBar here */}
                {/* <div className='slider' >
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div> */}
                <NavBar changeLevel={this.state.level} function={this.changeLevel} />
                <div className='Palette-colors' >
                    {/* Our color boxes */}
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        );
    }
}

export default Palette;