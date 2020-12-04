import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';

const styles = {
  showingNewBoxes: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '30px'
  },
  delete: {
    transition: 'all 0.3s ease-in-out'
  }
};

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

// const [state, setState] = useState({
//     currentColor: 'teal',
//     addedNewColor: ['purple', 'black'],
//     name: ''
// })
