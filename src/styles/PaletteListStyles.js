export default {
    root: {
        backgroundColor: 'blue',
        display: 'flex',
        height: '100vh',
        alignItmes: 'flex-start',
        justifyContent: 'center'

    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // border: '1px solid white'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    createLink: {
        // textDecoration: 'none',
        color: 'white',

    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}