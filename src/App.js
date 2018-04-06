import React, { Component } from 'react';
import Header from './components/header/header.js';
import Projects from './components/projects/projects.js';
import About from './components/about/about.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Projects/>
      </div>
    );
  }
}

export default App;
