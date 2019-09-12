import React from 'react';
import About from './about.jsx';
import Skills from './skills.jsx';
import Projects from './projects.jsx'
import Hello from './hello.jsx'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({
        loading: false
      })
    }.bind(this), 3000)
  }

  render() {
    return (
      <div>
      {this.state.loading ?
         <Hello /> :
         <div>
          <AppBar position="static" style={{height: '50px', backgroundColor: "black" }}>
            <Toolbar>
              <div className='toolbar'>Morgan Grace</div>
            </Toolbar>
          </AppBar>
          <br />
           <Fade left>
            <div className="about">
              <div className="bash" >
                1. bash
            </div>
              <About />
            </div>
          </Fade>
          <Fade left>
            <div className="skills">
              <Skills />
            </div>
          </Fade>
          <Fade left>
            <div className="container">
              <Projects />
            </div>
          </Fade>
          <div className="container">
          <div className="contact" ></div>
          </div>
        </div>
      }
      </div>
    )
  }
}


export default App;
