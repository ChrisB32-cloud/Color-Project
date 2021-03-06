import sizes from './Sizes';
import FlatMountains from './FlatMountains.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: '1'
    },
    '.fade-exit-active': {
      opacity: '0',
      transform: 'scale(0.9)',
      transition: 'opacity 500ms ease-out, transform 300ms'
    }
  },
  root: {
    display: 'flex',
    height: '100vh',
    alignItmes: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
    // background by SVGBackgrounds.com
    backgroundColor: ' #ff7700',
    backgroundImage: `url(${FlatMountains})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  },
  container: {
    width: '50%',
    // height: '100vh',
    // maxHeight: '180px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [sizes.down('sm')]: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    }

    // border: '1px solid white'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('lg')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('sm')]: {
      alignItems: 'center',
      gridTemplateColumns: 'repeat(1, 75%)'
    },
    [sizes.down('xs')]: {
      gridGap: '2.5%',
      gridTemplateColumns: 'repeat(1, 100%)'
    }
  }
};
