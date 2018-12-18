import React, {Component} from "react"
import { css } from "emotion"
import Team from "./Team"
import { colors } from "../../globals/colors"

let baseStyles = css({
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    border: 'solid 1px',
    borderRadius: '5px',
    padding: '5px',
    marginBottom: '10px',
    borderColor: colors.green
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