import React, { Component } from "react"
import PropTypes from "prop-types"
import { css } from "emotion"

let baseStyles = css({
    border: '1px solid gray',
    borderRadius: '5px',
    boxShadow: 'none',
    width: '30px'
})

export default class Input extends Component {
    static propTypes = {
        type: PropTypes.string,
        onChange: PropTypes.func
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
        return <input className={baseStyles} type={this.props.type} value={this.state.value} onChange={this.handleChange.bind(this)}></input>
    }
}