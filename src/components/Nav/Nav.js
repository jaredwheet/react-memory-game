
import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft"><a href="https://github.com/jaredwheet" target="blank"><i class="fab fa-github"></i></a>    |    <a href="https://www.linkedin.com/in/jared-wheet-70163a117/" target="blank"><i class="fab fa-linkedin-in"></i></a>    |    <a href="https://jaredwheet.github.io/Portfolio/" target="blank"><i class="far fa-file"></i></a></li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Your score: {this.props.score}</li>
                </ul>
            </nav >
        );
    }
}

export default Nav;