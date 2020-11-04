import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
        const { name, boxColor } = this.props
        // console.log(this.props);

        return (
            <CopyToClipboard text={`${boxColor}`} onCopy={this.changeCopyState} >
                <div style={{ backgroundColor: `${boxColor}` }} className='ColorBox' >
                    <div style={{ backgroundColor: `${boxColor}` }} className={`copy-overlay ${this.state.copied && "show"}`} />
                    <div className={`copy-msg ${this.state.copied && 'show'}`} >
                        <h1>Copied!</h1>
                        <p>{boxColor}</p>
                    </div>
                    <div className='copy-container' >
                        <div className='box-content' >
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'  >Copy</button>
                    </div>
                    <span className='see-more' >More</span>
                </div>

            </CopyToClipboard>
        );
    }
}

export default ColorBox;



// onClick={this.onCopy}