import React from 'react';
import Jello from 'react-reveal/Jello';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div className='hello'>
      <Jello className='helloText'>Hello Future Employer</Jello>
      </div>
  )
}

export default Hello;