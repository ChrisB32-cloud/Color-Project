import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css'

class ColorBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            copied: false
        }

        // this.onCopy = this.onCopy.bind(this)

    }

    // onCopy() {
    //     this.setState({ value: this.props.boxColor.color, copied: true })
    // }


    render() {

        console.log(this.state);

        const { name, color } = this.props.boxColor
        return (
            <CopyToClipboard text={`${color}`}>
                <div style={{ backgroundColor: `${color}` }} className='ColorBox' >
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