import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;
const defaultProps = {
  maxColors: 20
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
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
  const [selectColor, setSelectColor] = useState({ currentColor: 'teal' });
  const [addedNewColor, setAddedNewColor] = useState(props.palettes[0].colors);
  const [name, setColorName] = useState('');
  const [newPaletteName, setNewPaletteName] = useState('');
  const fullPalette =
    addedNewColor.length >= defaultProps.maxColors ? true : false;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateColor = newColor => {
    setSelectColor({ currentColor: newColor.hex });
  };

  const addColorName = e => {
    setColorName({ [e.target.name]: e.target.value });
  };

  const addColorBoxes = () => {
    setAddedNewColor([
      ...addedNewColor,
      { color: selectColor.currentColor, name: name.name }
    ]);
    setSelectColor({ currentColor: 'teal' });
    setColorName({ name: '' });
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

  useEffect(() => {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('colorNameAlreadyExist', value =>
      addedNewColor.every(
        newC => newC.name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('colorAlreadyExist', value =>
      addedNewColor.every(newC => newC.color !== selectColor.currentColor)
    );

    ValidatorForm.addValidationRule('paletteAlreadyExist', value =>
      props.palettes.every(
        p => p.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  // !!!! Add routes for go back button !!!!

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setAddedNewColor(arrayMove(addedNewColor, oldIndex, newIndex));
  };

  const handleClearPalette = () => {
    setAddedNewColor([]);
    // console.log('clicked');
  };

  const randomColorGenerater = () => {
    let randomColor = Math.floor(Math.random() * 255);
    let randomColor1 = Math.floor(Math.random() * 255);
    let randomColor2 = Math.floor(Math.random() * 255);

    setSelectColor({
      currentColor: `rgb(${randomColor}, ${randomColor1}, ${randomColor2})`
    });
  };

  // console.log(props.palettes[0].colors);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Color Palette
          </Typography>
          <ValidatorForm onSubmit={savePalette}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={newPaletteName}
              onChange={handleNewPaletteName}
              validators={['required', 'paletteAlreadyExist']}
              errorMessages={['Enter Palette Name', 'Palette Already Exist']}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
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
        <ChromePicker
          color={selectColor.currentColor}
          onChangeComplete={updateColor}
        />
        <ValidatorForm onSubmit={addColorBoxes}>
          <TextValidator
            label="Color Name"
            onChange={addColorName}
            name="name"
            value={name.name}
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
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <div className={classes.parentBoxContainer}> */}
        {/* heerrreee */}
        <DraggableColorList
          addedNewColor={addedNewColor}
          handleDelete={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
        />
        {/* </div> */}
      </main>
    </div>
  );
}

export default NewPaletteForm;
