import React from "react"
import { Link } from "react-router-dom"
import "./style.css"



class Container extends React.Component {
 
    render () {
    return (
        <div className="App">
            <h2>Front End Web Developer</h2>
            <h3>
                <ul className="list">
                    <li><Link className="link" to="/about">About Me</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                    <li><Link className="link" to="/projects">Projects</Link></li>
                </ul>
            </h3>
            <h1>I'm Han Mi Moon</h1>


        </div>
    )
}
}

export default Container;