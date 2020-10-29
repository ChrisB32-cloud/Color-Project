import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        const colorBoxes = this.props.colors.map((myColor, idx) => (
            <ColorBox boxColor={myColor} key={idx} />
        ))

        return (
            <div className='Palette' >
                {/* NavBar here */}
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