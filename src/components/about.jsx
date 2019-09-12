import React from 'react';
import Typing from 'react-typing-animation';

const About = () => (
  <div className="aboutContent">
    <Typing>
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
    </Typing>
  </div>
)

export default About;