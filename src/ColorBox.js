import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { name, color } = this.props.boxColor
        return (
            <div style={{ backgroundColor: `${color}` }} className='ColorBox' >
                <div className='copy-container' >
                    <div className='box-content' >
                        <span>{name}</span>
                    </div>
                    <button className='copy-button' >Copy</button>
                </div>
                <span className='see-more' >More</span>
            </div>
        );
    }
}

export default ColorBox; <h2>Color BOx Component</h2>