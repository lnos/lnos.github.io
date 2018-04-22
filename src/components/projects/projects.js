import React, { Component } from 'react';
import Project from './project.js';
import './projects.css';
import ProjectData from './projects.json'

class Projects extends Component {

    getProjects(){

      var projectArray = [];
      for (var i = 0; i < ProjectData.length; i++){
        projectArray.push(
          <Project
          title ={ProjectData[i].title}
          subtitle={ProjectData[i].subtitle}
          thumbnail={ProjectData[i].thumbnail}
          link = {ProjectData[i].link}
        />
        );
      }
      return projectArray;
    }

    render() {
        var projectData = this.getProjects()
        console.log(projectData);
        return (
          <div className="projects">
            <h3 className="projects-title">Works</h3>
            <div className="border"></div>
            <div className="projects-contents">
              {projectData}
            </div>
          </div>
        );
      }
}

export default Projects;