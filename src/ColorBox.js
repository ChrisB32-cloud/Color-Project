import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles';


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
                    <div style={{ backgroundColor: `${boxColor}` }} className={`${classes.copyOverlay} ${this.state.copied && classes.showOverlay}`} />
                    <div className={`${classes.copyMsg} ${this.state.copied && classes.showCopyMsg}`} >
                        <h1 >Copied!</h1>
                        <p>{boxColor}</p>
                    </div>
                    <div  >
                        <div className={classes.boxContent} >
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