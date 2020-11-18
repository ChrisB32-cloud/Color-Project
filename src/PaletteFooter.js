import React from 'react';
import styles from './styles/PaletteFooterStyles';
import { withStyles } from '@material-ui/styles';



const PaletteFooter = (props) => {

    const { paletteNames, emojis, classes } = props

    return (
        <footer className={classes.PaletteFooters}  >
            {paletteNames}
            <span className={classes.emoji}>{emojis}</span>
        </footer>
    );
};

export default withStyles(styles)(PaletteFooter);