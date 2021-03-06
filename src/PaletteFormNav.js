import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import useStyles from './styles/PaletteFormNavStyles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from './PaletteMetaForm';
import sizes from './styles/Sizes';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px'
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
  navBtns: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: '15px'
    alignItems: 'center',
    marginRight: '25px',
    [sizes.down('xs')]: {
      margin: '0'
    }
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
  }
}));

function PaletteFormNav(props) {
  const classes = useStyles();
  // const theme = useTheme();
  const {
    savePalette,
    newPaletteName,
    handleNewPaletteName,
    // classes,
    open,
    handleDrawerOpen
  } = props;

  return (
    <div className={classes.root}>
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
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/" style={{ textDecoration: 'none', marginRight: '10px' }}>
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <PaletteMetaForm
            palettes={props.palettes}
            savePalette={savePalette}
            newPaletteName={newPaletteName}
            handleNewPaletteName={handleNewPaletteName}
          />
        </div>
      </AppBar>
    </div>
  );
}

export default PaletteFormNav;
// export default withStyles(useStyles)(PaletteFormNav);

// useEffect(() => {
//   ValidatorForm.addValidationRule('paletteAlreadyExist', value =>
//     props.palettes.every(
//       p => p.paletteName.toLowerCase() !== value.toLowerCase()
//     )
//   );
// });

// <CssBaseline />
