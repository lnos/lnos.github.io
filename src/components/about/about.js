import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
          <div className="bio">
            <h3 className="bio-title">Bio</h3>
            <div className="border"></div>
            <p className="bio-contents">This is old version of my website.</p>
            <p className="bio-contents">Please go to <a href="https://seongkim.netlify.com/">Lnos.ca</a> for up-to date website</p>
          </div>
        );
      }
}

export default About;