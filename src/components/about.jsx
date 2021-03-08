import React from 'react';
import Typing from 'react-typing-animation';

const About = () => (
  <div className="aboutContent">
    <div>Hello! My name is Morgan Grace!</div>
      <div style={{width: "220px",
        height: "220px",
        marginRight: "auto",
        backgroundColor: "#f0f0f0",
        marginLeft: "auto",
        boxShadow: "inset 0px 0px 11px grey",
        borderRadius: "7px",
        marginTop: "20px",
        marginBottom: "20px"}}> 
      <img width="200" height="200" style={{marginTop: "10px"}}></img>
    </div>
    <div>
      I am a software engineer with a passion for front end developing. I got into software engineering as a career 2 years ago and went to Hack Reactor to further my skills. During my time at Hack Reactor I learned the entire software development lifecycle while also learning to work in a team and collaborate effectively with others in a remote enviroment. I then moved to a fulltime position at Bluewater Reporting where I worked with the fullstack and got to learn new things like handlebars.js and working with page.js to MSSQL on the database side. I also had the oppurtunity to help introduce new things like the use of github for version control.
    </div>
    {/* <Typing>
      <br />
      <span>
        Morgans-iMac:~ morgangrace$ npm install morgan
    </span>
      <br />
      <span>
        Full name: Morgan Grace
    </span>
      <br />
      <span>
        Age: 23
    </span>
      <br />
      <span>
        Hobbies: binging shows on netflix, hanging out with my cats, doing projects on my house
    </span>
      <br />
      <span>
        Goals: explore new programming languages, learn new interesting things to do with programming, learn how to make video games
    </span>
      <br />
      <span>
        npm <span className='npmWarn'>WARN</span>: caffiene required
    </span>
    </Typing> */}
  </div>
)

export default About;