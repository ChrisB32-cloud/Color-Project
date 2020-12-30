import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// - This is the change in varibles from colts to mine that are being passed down
// - from NewPaletteForm.js, keep in mind code is functional components with hooks

/* <ColorPickerForm
          fullPalette={fullPalette}      colts is paletteIsFull
          addColorBoxes={addColorBoxes}   colts is this.addNewColor
          addedNewColor={addedNewColor}   colts is colors
  /> */
// const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%'
  },
  picker: {
    width: '355px !important',
    // width: '100%, !important',
    marginTop: '2rem'
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '2.5rem',
    fontSize: '1.5rem'
  },
  colorNameInput: {
    width: '100% ',
    height: '30px'
  }
}));

const ColorPickerForm = props => {
  const classes = useStyles();
  // const theme = useTheme();
  const [currentColor, setCurrentColor] = useState('teal');
  const [nameOfColor, setNameOfColor] = useState('');
  const { fullPalette, addColorBoxes } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('nameExist', value =>
      props.addedNewColor.every(
        newC => newC.name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('colorExist', value =>
      props.addedNewColor.every(newC => newC.color !== currentColor)
    );
  });

  const updateColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleChange = e => {
    setNameOfColor(e.target.value);
  };

  const handleSubmit = e => {
    const parentPass = {
      color: currentColor,
      name: nameOfColor
    };

    addColorBoxes(parentPass);

    setCurrentColor('teal');
    setNameOfColor('');
  };

  // setCurrentColor(props.genColor);

  return (
    <div className={classes.root}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateColor}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          value={nameOfColor}
          placeholder="Color Name"
          name="nameColor"
          variant="filled"
          margin="normal"
          className={classes.colorNameInput}
          onChange={handleChange}
          validators={['required', 'nameExist', 'colorExist']}
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
          className={classes.addColor}
          style={{
            backgroundColor: fullPalette ? 'grey' : currentColor
          }}
        >
          {fullPalette ? 'Full Palette' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
