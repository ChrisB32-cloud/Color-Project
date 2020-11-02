import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css'

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

        const colorBoxes = this.props.palette.colors[this.state.level].map((myColor, idx) => (
            <ColorBox boxColor={myColor} key={idx} />
        ))

        console.log(this.state.level);

        return (
            <div className='Palette' >
                {/* NavBar here */}
                <Slider
                    defaultValue={this.state.level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel} />
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