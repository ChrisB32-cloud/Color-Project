import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <header className='NavBar'>
                <div className='logo'>
                    <a href="/">React Color Picker</a>
                </div>
                <div slider-container >
                    <span>Level: {this.props.changeLevel}</span>
                    <div className='slider' >
                        <Slider
                            defaultValue={this.props.changeLevel}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.function}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;