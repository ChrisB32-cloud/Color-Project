export default {
    root: {
        backgroundColor: 'blue',
        display: 'flex',
        height: '150vh',
        alignItmes: 'flex-start',
        justifyContent: 'center'

    },
    container: {
        width: '50%',
        // height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        // overflow: 'scroll'
        // border: '1px solid white'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        "& a": {
            color: 'white'
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}