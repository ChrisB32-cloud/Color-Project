import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

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

function PaletteFormNew(props) {
  const classes = useStyles();
  const {
    savePalette,
    newPaletteName,
    handleNewPaletteName,
    // classes,
    open,
    handleDrawerOpen
  } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('paletteAlreadyExist', value =>
      props.palettes.every(
        p => p.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  return (
    <div>
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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PaletteFormNew;
