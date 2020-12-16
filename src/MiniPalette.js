import React from 'react';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';

function MiniPalette(props) {
  const {
    classes,
    paletteName,
    colors,
    emoji,
    myPaletteFunction,
    handlePaletteDelete
  } = props;
  // can extract out id if we need to
  //!!!! important, consider using e.stopPropagation
  // instead of moving the onClick to show the individual palettes

  const handleDelete = () => {
    handlePaletteDelete(props.id);
  };

  //   console.log(props.id);
  return (
    <div className={classes.root}>
      <div className={classes.deleteBox}>
        <DeleteIcon
          //   style={{ fontSize: '22px' }}
          className={classes.delete}
          onClick={handleDelete}
        />
      </div>
      <div className={classes.colors} onClick={myPaletteFunction}>
        {colors.map(color => (
          <div
            className={classes.miniBox}
            style={{ backgroundColor: color.color }}
            key={color.name}
          />
        ))}
      </div>
      <h5 className={classes.title}>
        {' '}
        {paletteName} <span className={classes.emoji}> {emoji} </span>{' '}
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
// This is what is know as a Higher Order Component (HOC)
// In this case basically it takes our mini palette and return a new verison
// that has styles passed down to the props

// We can style individual tags in main like this "& h1": {}
// This is consided nesting

//<div className={classes.main} >
//     <h1>Mini Palette Component</h1>
//     <section className={classes.secondary} >
//        <h1>Mini Palette Component <span>aklsdf</span> </h1>
//     </section>
//     <span>aklsdf</span>
//</div>
