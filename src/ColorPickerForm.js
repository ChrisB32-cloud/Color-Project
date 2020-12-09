import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// - This is the change in varibles from colts to mine that are being passed down
// - from NewPaletteForm.js, keep in mind code is functional components with hooks

{
  /* <ColorPickerForm
          fullPalette={fullPalette}      colts is paletteIsFull
          addColorBoxes={addColorBoxes}   colts is this.addNewColor
          addedNewColor={addedNewColor}   colts is colors
  /> */
}

const ColorPickerForm = props => {
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

    // setCurrentColor('teal');
    setNameOfColor('');
  };

  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={updateColor} />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={nameOfColor}
          name="nameColor"
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
