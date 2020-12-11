import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const PaletteMetaForm = props => {
  const [open, setOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
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

  const emojiDisplay = () => {
    setShowEmoji(true);
  };

  const handleEmojiPick = emo => {
    savePalette(emo.native);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save
      </Button>
      {showEmoji === true ? (
        <Dialog open={open}>
          <Picker onSelect={handleEmojiPick} />
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={savePalette}>
            <DialogContent>
              <DialogContentText>
                Enter a name for your new Palette. Make sure the name that you
                choose isn't a existing Palette name
              </DialogContentText>
              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                fullWidth
                margin="normal"
                value={newPaletteName}
                onChange={handleNewPaletteName}
                validators={['required', 'paletteAlreadyExist']}
                errorMessages={['Enter Palette Name', 'Palette Already Exist']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                // type="submit"
                onClick={emojiDisplay}
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      )}
    </div>
  );
};

export default PaletteMetaForm;
