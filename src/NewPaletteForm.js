import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import PaletteFormNew from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Button from '@material-ui/core/Button';
// import { ChromePicker } from 'react-color';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;
const defaultProps = {
  maxColors: 20
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  parentBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '20px'
  }
}));

function NewPaletteForm(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [selectColor, setSelectColor] = useState({ currentColor: 'teal' });
  const [addedNewColor, setAddedNewColor] = useState(props.palettes[0].colors);
  // const [name, setColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
  const [genColor, setGenColor] = useState('');
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

  const savePalette = () => {
    let newName = newPaletteName;

    const newColorsPassed = {
      paletteName: newName,
      id: newName.replace(/ /g, '-').toLowerCase(),
      emoji: 'em',
      colors: [...addedNewColor]
    };
    props.handleSave(newColorsPassed);
    props.history.push('/');
  };

  const handleNewPaletteName = e => {
    setNewPaletteName(e.target.value);
  };

  const handleDelete = deleteBox => {
    setAddedNewColor(
      addedNewColor.filter(
        n => n.name.toLowerCase() !== deleteBox.toLowerCase()
      )
    );
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
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = addedNewColor.some(
        color => color.name === randomColor.name
      );
    }
    setAddedNewColor([...addedNewColor, randomColor]);
  };

  // console.log(genColor);

  return (
    <div className={classes.root}>
      <PaletteFormNew
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
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={fullPalette}
            onClick={randomColorGenerater}
          >
            Randon Color
          </Button>
        </div>
        <ColorPickerForm
          fullPalette={fullPalette}
          addColorBoxes={addColorBoxes}
          addedNewColor={addedNewColor}
          genColor={genColor}
          randomColorGenerater={randomColorGenerater}
        />
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

export default NewPaletteForm;

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

{
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
}
