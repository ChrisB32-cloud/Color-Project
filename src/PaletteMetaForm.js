import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PaletteMetaForm = props => {
  const [open, setOpen] = React.useState(false);
  const { savePalette, newPaletteName, handleNewPaletteName, palettes } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('paletteAlreadyExist', value =>
      props.palettes.every(
        p => p.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Go Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
