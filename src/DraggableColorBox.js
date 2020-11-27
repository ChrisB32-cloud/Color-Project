import React from 'react';
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
    }
}

const DraggableColorBox = (props) => {
    console.log(props);
    const { classes } = props
    return (
        <div className={classes.showingNewBoxes} style={{ backgroundColor: props.color }}>
            {props.color}
        </div>
    );
};

export default withStyles(styles)(DraggableColorBox);



// const [state, setState] = useState({
//     currentColor: 'teal',
//     addedNewColor: ['purple', 'black'],
//     name: ''
// })