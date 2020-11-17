import React, { Component } from 'react';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css'

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
        const { name, boxColor, paletteId, colorId, showLink } = this.props
        const isDarkTextColor = chroma(boxColor).luminance() <= 0.08 ? 'white' : 'rgba(0,0,0,0.7)';

        return (
            <CopyToClipboard text={`${boxColor}`} onCopy={this.changeCopyState} >
                <div style={{ backgroundColor: `${boxColor}` }} className='ColorBox' >
                    <div style={{ backgroundColor: `${boxColor}` }} className={`copy-overlay ${this.state.copied && "show"}`} />
                    <div className={`copy-msg ${this.state.copied && 'show'}`} >
                        <h1>Copied!</h1>
                        <p style={{ color: isDarkTextColor }} >{boxColor}</p>
                    </div>
                    <div className='copy-container' >
                        <div className='box-content' >
                            <span style={{ color: isDarkTextColor }}>{name}</span>
                        </div>
                        <button className='copy-button' style={{ color: isDarkTextColor }} >Copy</button>
                    </div>
                    {/* e.stopPropagation basiclly means, this is the end of the road, don't fire the event from the parent (so we won't get the css/style transtion from the parent, also won't copy the color to the clipboard) */}
                    {showLink && (<Link exact to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                        <span className='see-more' style={{ color: isDarkTextColor }}>More</span>
                    </Link>)}
                </div>

            </CopyToClipboard>
        );
    }
}

export default ColorBox;



// onClick={this.onCopy}