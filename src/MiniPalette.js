import React from 'react';
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
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#DAE1E4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'

    },
    miniBox: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-0.2rem',
        marginBottom: '1.5rem',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'

    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    }
}

function MiniPalette(props) {

    const { classes, paletteName, colors, emoji, myPaletteFunction } = props;
    // can extract out id if we need to


    // console.log(props);
    return (
        <div className={classes.root} onClick={myPaletteFunction} >
            <div className={classes.colors} >
                {colors.map(color => (
                    <div
                        className={classes.miniBox}
                        style={{ backgroundColor: color.color }}
                        key={color.name}
                    />
                ))}
            </div>
            <h5 className={classes.title}> {paletteName} <span className={classes.emoji}> {emoji} </span> </h5>
        </div>
    );

}

export default withStyles(styles)(MiniPalette);
// This is what is know as a Higher Order Component (HOC)
// In this case basically it takes our mini palette and return a new verison
// that has styles passed down to the props