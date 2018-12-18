import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { css, injectGlobal } from 'emotion'
import Match from './components/Match/Match'

injectGlobal`
   * { font-family: "Helvetica" },
`
let containerStyles = css({
    padding: "5px"
})
class App extends Component {
    
    render() {
        return(
            <div className={containerStyles}>
                <Match />
                <Match />
                <Match />
                <Match />
            </div>
        )
    }
}

export default hot(module)(App);