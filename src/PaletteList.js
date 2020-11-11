import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';



const styles = {
    root: {
        backgroundColor: 'blue',
        display: 'flex',
        height: '100%',
        alignItmes: 'flex-start',
        justifyContent: 'center'

    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '1px solid white'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}


class PaletteList extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        // console.log(this.props.pals);
        const { myPalettes, classes } = this.props

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>PaletteList Component</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {myPalettes.map((p, idx) => (
                            <MiniPalette {...p} />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);

