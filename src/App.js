import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { css } from 'emotion'
import Match from './components/Match/Match'

const style = css`
    color: hotpink;
`

let headerStyle = css({
    fontFamily: "MonopolWebRubrik-Bold",
    color: "red"
  })

class App extends Component {
    
    render() {
        return(
            <Match>
                <h1 className={headerStyle}>marre ASFASF!</h1>
            </Match>
        )
    }
}

export default hot(module)(App);