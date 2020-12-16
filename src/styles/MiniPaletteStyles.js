export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    // maxHeight: '200px',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
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
    width: '100%',
    left: '0px',
    top: '0px',
    padding: '10px',
    color: 'transparent',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '30px',
    '&:hover svg': {
      color: 'black',
      transform: 'scale(1.5)'
    }
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
