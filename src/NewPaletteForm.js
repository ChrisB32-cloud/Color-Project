import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = {
    root: {
        //
    },
    drawer: {
        // width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        // width: drawerWidth,
    },
}

class NewPaletteForm extends Component {

    constructor(props) {
        super(props)

        this.state = { open: false }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ open: true })
    }


    render() {

        const { classes } = this.props

        return (
            <div>
                <h1>New Palette Form Comonpent</h1>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    onClick={this.handleClick}
                // classes={{
                //     paper: classes.drawerPaper,
                // }}
                ></Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(NewPaletteForm);