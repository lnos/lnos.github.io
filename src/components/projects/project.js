import React, { Component } from 'react';
import './project.css';

class Project extends Component {
    render() {
        return (
          <div className="container">
            <div className="project">
              <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/bearfish.png'} alt="test"/>            
              <div className="title">
                <h2 className="mainTitle">Bear Fish</h2>
                <p className="subTitle">Infinite Sidescroller with Retro Graphics and cool item mechanics.</p>
              </div>
            </div>
          </div>
        );
      }
}

export default Project;