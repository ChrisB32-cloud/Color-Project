import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        // console.log(this.props.pals);
        const { myPalettes } = this.props

        return (
            <div>
                <h1>PaletteList Component</h1>
                <MiniPalette />
                <br />
                {myPalettes.map((p, idx) => (
                    <p> <Link exact to={`/palette/${p.id}`} key={idx}> {p.paletteName} </Link></p>
                ))}
            </div>
        );
    }
}

export default PaletteList;

