import chroma from 'chroma-js';
import sizes from './Sizes';

export default {
  ColorBox: {
    width: '20%',
    height: props => (props.showingFullPalette === true ? '25%' : '50%'),
    margin: '0 auto',
    padding: '0%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette === true ? '20%' : '33.3333%')
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette === true ? '10%' : '50%')
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette === true ? '5%' : '10%')
    }
  },
  copyText: {
    color: props =>
      chroma(props.boxColor).luminance() <= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props =>
      chroma(props.boxColor).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    color: props =>
      chroma(props.boxColor).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    color: props =>
      chroma(props.boxColor).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: '0'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    // padding: '10px',
    // marginLeft: '2px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMsg: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    color: 'white',
    opacity: '0',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.3)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
      color: props =>
        chroma(props.boxColor).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white'
    }
  },
  showCopyMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};
