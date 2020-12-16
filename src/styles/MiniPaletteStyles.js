export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    // maxHeight: '200px',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      backgroundColor: 'red',
      transform: 'scale(1.8)'
    }
  },
  colors: {
    backgroundColor: '#DAE1E4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  deleteBox: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    // borderRadius: '5px',
    color: 'transparent',
    // fontSize: '5px',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '30px'
  },
  delete: {
    transition: 'all 0.3s ease-in-out'
  },
  miniBox: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    // marginTop: '-0.2rem',
    // marginBottom: '1.5rem',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  }
};
