import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            format: 'hex'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value })
        this.props.handleChange(e.target.value)
    }

    render() {

        // console.log(this.state.format);
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
                <div className='select-container'>
                    <Select value={this.state.format} onChange={this.handleChange} >
                        <MenuItem value='hex'>HEX - #ffff</MenuItem>
                        <MenuItem value='rgb'>RGD - rbg(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rbga(255,255,255,0.1) </MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default NavBar;