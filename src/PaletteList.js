import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';



const styles = {
    root: {
        backgroundColor: 'blue',
        display: 'flex',
        height: '100vh',
        alignItmes: 'flex-start',
        justifyContent: 'center'

    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // border: '1px solid white'
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

        // this.goToPalette = this.goToPalette.bind(this)
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }


    render() {
        // console.log(this.props);
        const { myPalettes, classes } = this.props

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Color</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {myPalettes.map((p, idx) => (
                            <MiniPalette {...p} myPaletteFunction={() => this.goToPalette(p.id)} />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);

// 