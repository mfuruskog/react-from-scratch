import React, { Component } from "react"
import PropTypes from "prop-types"
import { css } from "emotion"
import Input from "../Common/Input"

let baseStyles = css({
    display: 'flex',
    justifyContent: 'space-between'    
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
                <Input type="number" value={this.props.goals} onChange={this.handleGoalChange.bind(this)}></Input>
            </div>
        )
    }
}

export default Team