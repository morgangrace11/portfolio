import React from 'react';
import About from './about.jsx';
import Skills from './skills.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="title" >Morgan Grace</h1>
        <div className="about">
          <div className="bash" >
            1. bash
         </div>
          <About />
        </div>
        <div className="container" className="skills">
          <Skills />
        </div>
        <div className="container">
          <div className="projects" ></div>
        </div>
        <div className="container">
          <div className="contact" ></div>
        </div>
      </div>
    )
  }
}


export default App;
