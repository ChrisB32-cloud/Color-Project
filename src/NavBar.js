import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            format: 'hex',
            snacks: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.closeSnackBar = this.closeSnackBar.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value, snacks: true })
        this.props.handleChange(e.target.value)
        setTimeout(() => {
            this.setState({ snacks: false })
        }, 2000);
    }

    handleClose(event, reason) {
        // this.setState({ snacks: false })
        if (reason === 'clickaway') {
            return
        }
        this.setState({ snacks: false })
    }

    closeSnackBar() {
        this.setState({ snacks: false })
    }

    render() {

        // console.log(this.state.format);
        return (
            <header className='NavBar'>
                <div className='logo'>
                    <a href="/">React Color Picker</a>
                </div>
                <div slider-container >
                    <span>Level: {this.props.changeLevel}</span>
                    <div className='slider' >
                        <Slider
                            defaultValue={this.props.changeLevel}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.function}
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select
                        value={this.state.format}
                        onChange={this.handleChange}
                    >
                        <MenuItem value='hex'>HEX - #ffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rbg(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rbga(255,255,255,0.1) </MenuItem>
                    </Select>
                </div>
                <div className='snackBar-Container' >
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snacks}
                        // autoHideDuration={2000}
                        message={<span id='message-id' >Format Changed to {this.state.format.toUpperCase()} </span>}
                        ContentProps={{
                            "aria-describedby": "message-id"
                        }}
                        // onClose={this.closeSnackBar}
                        action={[
                            // <React.Fragment>
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={this.closeSnackBar}
                                key='close'
                                aria-label='close'
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                            // </React.Fragment>
                        ]
                        }
                    >
                        {/* <Alert onClose={this.handleClose} >
                            Format Changed
                        </Alert> */}
                    </Snackbar>
                    {/* <CloseIcon /> */}
                </div>
            </header>
        );
    }
}

export default NavBar;