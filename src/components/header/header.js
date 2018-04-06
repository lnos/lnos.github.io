import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
          <div className="App">
            <header className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="Title">Seong Kim</h1>
                <h2 className="Subtitle">Developer X Innovator</h2>
                <div className="Connect">
                    <a className="Github" href="http://github.com/lnos">Github</a>
                    <a className="Linkedin" href="http://www.linkedin.com/in/seong-kim-ca">Linkedin</a>
                    <a className="Resume" href="http://Lnos.github.io/resume.pdf">Resume</a>
                    <a className="Email" href="mailto:hoon5421@gmail.com">Email me</a>
                </div>
            </header>
          </div>
        );
      }
}

export default Header;