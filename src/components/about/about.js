import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
          <div className="bio">
            <h3 className="bio-title">Bio</h3>
            <div className="border"></div>
            <p className="bio-contents">Hi I am Seong! I love penguins and solving problems.</p>
          </div>
        );
      }
}

export default About;