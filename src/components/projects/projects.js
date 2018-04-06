import React, { Component } from 'react';
import Project from './project.js';
import './projects.css';

class Projects extends Component {

    getProjects(){

    }

    render() {
        return (
          <div className="projects">
            <h3 className="projects-title">Works</h3>
            <div className="border"></div>
            <div className="projects-contents">
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
              <Project/>
            </div>
          </div>
        );
      }
}

export default Projects;