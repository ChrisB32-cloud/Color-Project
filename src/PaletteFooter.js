import React from 'react';
// import { palette } from '@material-ui/system';



const PaletteFooter = (props) => {

    const { paletteNames, emojis } = props

    return (
        <footer className='Palette-footer'  >
            {paletteNames}
            <span className='emoji'>{emojis}</span>
        </footer>
    );
};

export default PaletteFooter;