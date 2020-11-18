import React from 'react';
import styles from './styles/MiniPaletteStyles';
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