import React, { Component } from 'react';
import './project.css';

class Project extends Component {
    render() {
        return (
          <div className="container">
            <div className="project">
              <a href={this.props.link}>
              <img className="thumbnail" src={process.env.PUBLIC_URL + '/images/' + this.props.thumbnail} alt={this.props.title}/>            
              <div className="title">
                <h2 className="mainTitle">{this.props.title}</h2>
                <p className="subTitle">{this.props.subtitle}</p>
              </div>
              </a>
            </div>
          </div>
        );
      }
}

export default Project;