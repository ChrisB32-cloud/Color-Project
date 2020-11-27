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
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    parentBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px'
    },


}));



function NewPaletteForm() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectColor, setSelectColor] = useState({ currentColor: 'teal' })
    const [addedNewColor, setAddedNewColor] = useState(['purple', 'black'])
    const [name, setName] = useState({ name: '' })


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const updateColor = (newColor) => {
        setSelectColor({ currentColor: newColor.hex })
    }

    const addColorName = (e) => {
        setName({ [e.target.name]: e.target.value })
    }

    const addColorBoxes = () => {
        setAddedNewColor([...addedNewColor, selectColor.currentColor])
    }

    // console.log(name);
    console.log(addedNewColor);
    // console.log(selectColor.currentColor);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
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
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h4" >Design Your Palette</Typography>
                <div>
                    <Button variant="contained" color="secondary">
                        Clear Palette
                    </Button>
                    <Button variant="contained" color="primary">
                        Randon Color
                    </Button>
                </div>
                <ChromePicker
                    color={selectColor.currentColor}
                    onChangeComplete={updateColor}
                />
                {/* <TextField id="filled-basic" name='name' label="Color Name" variant="filled" onChange={addColorName} /> */}
                <ValidatorForm onSubmit={addColorBoxes}>
                    <TextValidator
                        label="Color Name"
                        onChange={addColorName}
                        name="name"
                        value={name.name}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'already have name']}
                    />
                </ValidatorForm>
                <Button variant="contained" color='primary' style={{ backgroundColor: selectColor.currentColor }} type='submit'>
                    Add Color
                </Button>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {/* <div className={classes.parentBoxContainer}> */}
                {addedNewColor.map(c => (
                    <DraggableColorBox color={c} nameColor={name.name} />
                ))}
                {/* </div> */}
            </main>
        </div>
    );
}

export default NewPaletteForm





// const handleColorChange = (color, e) => {
    //     setSelectColor({
    //         selectColor: {
    //             hex: color.hex,
    //             rgb: {
    //                 r: color.rgb.r,
    //                 g: color.rgb.g,
    //                 b: color.rgb.b,
    //             },
    //             rgba: {
    //                 r: color.rgb.r,
    //                 g: color.rgb.g,
    //                 b: color.rgb.b,
    //                 a: color.rgb.a
    //             }
    //         }
    //     })
    // }