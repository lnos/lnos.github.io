import React, { Component } from 'react';
import './project.css';

class Project extends Component {
    render() {
        return (
            <div className="project">
            <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/bearfish.png'} alt="test"/>            
            <div className="title">
              <h1 className="mainTitle">Test</h1>
              <p className="subTitle">Here goes Subtitle</p>
            </div>
          </div>
        );
      }
}

export default Project;