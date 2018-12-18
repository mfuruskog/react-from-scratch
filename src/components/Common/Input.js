import React, { Component } from "react"
import PropTypes from "prop-types"
import { css } from "emotion"

let baseStyles = css({
    border: '1px solid',
    borderRadius: '5px',
    boxShadow: 'none',
    width: '30px',
    textAlign: 'center',
    '&:focus': 
        { 
            borderBottom: 'solid green 1px'            
        }
})

export default class Input extends Component {
    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func,
        customStyles: PropTypes.string
    }
    
    constructor(props) {
        super(props);
        this.state = {value: this.props.value}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event)
    }

    render() {
        return <input className={css`${baseStyles} ${this.props.customStyles}`} type={this.props.type} value={this.state.value} onChange={this.handleChange.bind(this)}></input>
    }
}