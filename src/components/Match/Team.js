import React, { Component } from "react"
import PropTypes from "prop-types"
import { css } from "emotion"
import Input from "../Common/Input"

let baseStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: "5px"
})
let inputStyles = css({
    border: 0,
    borderBottom: "solid black 1px",
    borderRadius: 0,
    '&:focus': { borderBottom: 'solid green 1px'}
})

class Team extends Component {
    static propTypes = {
        name: PropTypes.string,
        goals: PropTypes.number
    }
    
    handleGoalChange(event) {
        console.log(event.target, event.target.value)
    }
    
    render() {
        return (
            <div className={baseStyles}>
                <span>{this.props.name}</span>
                <Input type="text" value={this.props.goals} onChange={this.handleGoalChange.bind(this)} customStyles={inputStyles}></Input>
            </div>
        )
    }
}

export default Team