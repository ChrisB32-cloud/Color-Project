import React, { Component } from 'react';
import styles from './styles/PaletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';


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
                            <MiniPalette {...p} key={idx} myPaletteFunction={() => this.goToPalette(p.id)} />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);

// 