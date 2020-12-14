import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  // console.log(props);
  const { classes } = props;

  const deleteColorBox = () => {
    props.handleDeleteMore(props.theName);
  };

  return (
    <div
      className={classes.showingNewBoxes}
      style={{ backgroundColor: props.color }}
    >
      <div className={classes.boxContent}>
        <span>{props.theName}</span>
        <DeleteIcon className={classes.delete} onClick={deleteColorBox} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
