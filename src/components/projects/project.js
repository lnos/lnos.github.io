import React, { Component } from 'react';
import './project.css';

class Project extends Component {
    render() {
        return (
            <div className="project">
            <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/bearfish.png'} alt="test"/>
          </div>
        );
      }
}

export default Project;