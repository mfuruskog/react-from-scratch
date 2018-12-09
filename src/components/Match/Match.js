import React, {Component} from "react"
import { css } from "emotion"

let baseStyles = css({
    display: "flex",
    backgroundColor: "blue"
})

class Match extends Component {
    render() {
        return <div className={baseStyles}>Testtest</div>
    }
}

export default Match