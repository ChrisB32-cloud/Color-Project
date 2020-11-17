import React, { Component } from 'react';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css'


const styles = {
    ColorBox: {
        width: '20%',
        height: props => props.showingFullPalette === true ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover button": {
            opacity: '1',
            transition: '0.5s',
        }
    },
    copyText: {
        color: props => chroma(props.boxColor).luminance() <= 0.7 ? 'black' : 'white',
    },
    colorName: {
        color: props => chroma(props.boxColor).luminance() <= 0.08 ? 'white' : 'black',
    },
    seeMore: {
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        background: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        color: props => chroma(props.boxColor).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
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
        color: props => chroma(props.boxColor).luminance() >= 0.07 ? 'rgba(0,0,0,0.6)' : 'white',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none',
        opacity: '0'
    }
}

class ColorBox extends Component {

    constructor(props) {
        super(props)

        this.state = { copied: false }

        this.changeCopyState = this.changeCopyState.bind(this)

    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }


    render() {
        const { name, boxColor, paletteId, colorId, showingFullPalette, classes } = this.props
        // const isDarkTextColor = chroma(boxColor).luminance() <= 0.08 ? 'white' : 'rgba(0,0,0,0.7)';

        return (
            <CopyToClipboard text={`${boxColor}`} onCopy={this.changeCopyState} >
                <div style={{ backgroundColor: `${boxColor}` }} className={classes.ColorBox} >
                    <div style={{ backgroundColor: `${boxColor}` }} className={`copy-overlay ${this.state.copied && "show"}`} />
                    <div className={`copy-msg ${this.state.copied && 'show'}`} >
                        <h1>Copied!</h1>
                        <p className={classes.copyText}  >{boxColor}</p>
                    </div>
                    <div className='copy-container' >
                        <div className='box-content' >
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}  >Copy</button>
                    </div>
                    {/* e.stopPropagation basiclly means, this is the end of the road, don't fire the event from the parent (so we won't get the css/style transtion from the parent, also won't copy the color to the clipboard) */}
                    {showingFullPalette && (<Link exact to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore} >More</span>
                    </Link>)}
                </div>

            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);

// style={{ color: isDarkTextColor }}

// onClick={this.onCopy}