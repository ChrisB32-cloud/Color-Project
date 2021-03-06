import React, { useState } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles/NewPaletteFormStyles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import seedColors from './seedColor';
import arrayMove from 'array-move';

const defaultProps = {
  maxColors: 20
};

function NewPaletteForm(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [selectColor, setSelectColor] = useState({ currentColor: 'teal' });
  const [addedNewColor, setAddedNewColor] = useState(seedColors[0].colors);
  // const [addedNewColor, setAddedNewColor] = useState(props.palettes[0].colors);
  // const [name, setColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
  // const [genColor, setGenColor] = useState('');
  const fullPalette =
    addedNewColor.length >= defaultProps.maxColors ? true : false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addColorBoxes = passedColor => {
    // console.log(passedColor);
    setAddedNewColor([
      ...addedNewColor,
      // { color: selectColor.currentColor, name: name }
      passedColor
    ]);
    // setSelectColor({ currentColor: 'teal' });
    // setColorName('');
  };

  const savePalette = emo => {
    let newName = newPaletteName;

    const newColorsPassed = {
      paletteName: newName,
      id: newName.replace(/ /g, '-').toLowerCase(),
      emoji: emo,
      colors: [...addedNewColor]
    };
    props.handleSave(newColorsPassed);
    props.history.push('/');
  };

  const handleNewPaletteName = e => {
    setNewPaletteName(e.target.value);
  };

  // !!!! Add routes for go back button !!!!

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setAddedNewColor(arrayMove(addedNewColor, oldIndex, newIndex));
  };

  const handleClearPalette = () => {
    setAddedNewColor([]);
    // console.log('clicked');
  };

  const randomColorGenerater = () => {
    // let randomColor = Math.floor(Math.random() * 255);
    // let randomColor1 = Math.floor(Math.random() * 255);
    // let randomColor2 = Math.floor(Math.random() * 255);

    // setGenColor(`rgb(${randomColor}, ${randomColor1}, ${randomColor2})`);

    const allColors = props.palettes.map(p => p.colors).flat();
    let rand;
    let genRandColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      genRandColor = allColors[rand];
      isDuplicateColor = addedNewColor.some(
        color => color.name === genRandColor.name
      );
    }
    setAddedNewColor([...addedNewColor, genRandColor]);
  };

  const handleDelete = deleteBox => {
    setAddedNewColor(
      addedNewColor.filter(
        n => n.name.toLowerCase() !== deleteBox.toLowerCase()
      )
    );
  };

  // console.log(props);

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={props.palettes}
        addedNewColor={addedNewColor}
        savePalette={savePalette}
        newPaletteName={newPaletteName}
        handleDrawerOpen={handleDrawerOpen}
        handleNewPaletteName={handleNewPaletteName}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearPalette}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={fullPalette}
              onClick={randomColorGenerater}
              className={classes.button}
            >
              Randon Color
            </Button>
          </div>
          <ColorPickerForm
            fullPalette={fullPalette}
            addColorBoxes={addColorBoxes}
            addedNewColor={addedNewColor}
            // genColor={genColor}
            randomColorGenerater={randomColorGenerater}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          addedNewColor={addedNewColor}
          handleDelete={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default withStyles(useStyles)(NewPaletteForm);

// const updateColor = newColor => {
// setSelectColor({ currentColor: newColor.hex });
// };

// const addColorName = e => {
// setColorName(e.target.value);
// };

// useEffect(() => {
//   // custom rule will have name 'isPasswordMatch'
//   ValidatorForm.addValidationRule('colorNameAlreadyExist', value =>
//     addedNewColor.every(
//       newC => newC.name.toLowerCase() !== value.toLowerCase()
//     )
//   );
//   ValidatorForm.addValidationRule('colorAlreadyExist', value =>
//     addedNewColor.every(newC => newC.color !== selectColor.currentColor)
//   );
// ValidatorForm.addValidationRule('paletteAlreadyExist', value =>
//   props.palettes.every(
//     p => p.paletteName.toLowerCase() !== value.toLowerCase()
//   )
// );
// });

/* <ChromePicker
          color={selectColor.currentColor}
          onChangeComplete={updateColor}
        />
        <ValidatorForm onSubmit={addColorBoxes}>
          <TextValidator
            label="Color Name"
            onChange={addColorName}
            name="name"
            value={name}
            validators={[
              'required',
              'colorNameAlreadyExist',
              'colorAlreadyExist'
            ]}
            errorMessages={[
              'Enter Color Name',
              'Already have name',
              'Already have Color'
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={fullPalette}
            style={{
              backgroundColor: fullPalette ? 'grey' : selectColor.currentColor
            }}
          >
            {fullPalette ? 'Full Palette' : 'Add Color'}
          </Button>
        </ValidatorForm> */

// rgb random color generate function
// function randomeRGBColorGenerate() {
// let randomColor = Math.floor(Math.random() * 255);
// let randomColor1 = Math.floor(Math.random() * 255);
// let randomColor2 = Math.floor(Math.random() * 255);

// setGenColor(`rgb(${randomColor}, ${randomColor1}, ${randomColor2})`);
// }
