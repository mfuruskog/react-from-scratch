import React, {Component} from "react"
import { css } from "emotion"
import Team from "./Team"

let baseStyles = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100px'
})

class Match extends Component {
    constructor(props) {
        super(props)
        
    }

    static propTypes = {
    }
    
    render() {
        return (
            <div className={baseStyles}>            
                <Team name="Sverige" goals={5}></Team>
                <Team name="Norge" goals={3}></Team>
            </div>
        )
    }
}

export default Match