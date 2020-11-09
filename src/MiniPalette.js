import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

// We can style individual tags in main like this "& h1": {}
// This is consided nesting

//<div className={classes.main} >
//     <h1>Mini Palette Component</h1>
//     <section className={classes.secondary} >
//        <h1>Mini Palette Component <span>aklsdf</span> </h1>
//     </section>
//     <span>aklsdf</span>
//</div>

const styles = {
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal',

    },
    secondary: {
        backgroundColor: 'pink',
        '& h1': {
            color: 'white',
            "& span": {
                backgroundColor: 'yellow'
            }
        }
    }
}

function MiniPalette(props) {

    const { classes } = props;

    // console.log(classes); 
    return (
        <div className={classes.main} >
            <h1>Mini Palette Component</h1>
            <section className={classes.secondary} >
                <h1>Mini Palette Component <span>aklsdf</span> </h1>
            </section>
            <span>aklsdf</span>
        </div>
    );

}

export default withStyles(styles)(MiniPalette);
// This is what is know as a Higher Order Component (HOC)
// In this case basically it takes our mini palette and return a new verison
// that has styles passed down to the props