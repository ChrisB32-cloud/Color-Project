import chroma from 'chroma-js';
import sizes from './Sizes';

const styles = {
  showingNewBoxes: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  nameSpace: {
    marginLeft: '10px'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    // marginRight: '30px',
    left: '0px',

    bottom: '0px',
    // padding: '10px',
    // color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    color: props =>
      chroma(props.color).luminance() >= 0.07
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(229,234,234,1.0)',
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
// drag styles
export default styles;
