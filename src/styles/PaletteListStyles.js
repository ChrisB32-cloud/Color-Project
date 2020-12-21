import sizes from './Sizes';

export default {
  root: {
    backgroundColor: 'blue',
    display: 'flex',
    height: '100vh',
    alignItmes: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll'
  },
  container: {
    width: '50%',
    // height: '100vh',
    // maxHeight: '180px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
    // [sizes.down('md')]: {
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // }

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
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridGap: '2.5%',
      gridTemplateColumns: 'repeat(1, 100%)'
    }
  }
};
