import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

class SingleColorPalette extends Component {

    constructor(props) {
        super(props)

        this._shades = this.gatherShades(this.props.palette, this.props.colorId)

        this.gatherShades = this.gatherShades.bind(this)
    }

    gatherShades(palette, colorId) {

        for (let c in palette.colors) {
            // console.log(c, palette.colors[c]);
            let SingleRange = palette.colors[c]
            // console.log(SingleRange);
            SingleRange.map(newRange => {
                // console.log(newRange);
                if (newRange.id === colorId) {
                    console.log(newRange.name);
                }
            })
        }

    }

    render() {

        const { palette, colorId } = this.props

        // console.log(palette);

        return (
            <div>
                <h1>Our single color palette Component</h1>
            </div>
        );
    }
}

export default SingleColorPalette;