import React from 'react';
import Chip from '@material-ui/core/Chip';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills10: ['React', 'Angular', 'Redux', 'CSS',
        'Styled Components', 'Flex-box', 'CSS Grid', 'Material UI', 'HTML'] ,
      skills20: ['Webpack', 'Axios', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose', 'PostgreSQL', 'Express', 'Bcrypt' ],
      skills30: ['Node.js', 'AWS', 'Docker', 'Javascript', 'Mocha', 'Chai', 'Jest', 'Enzyme']
    }
  }

  render() {
    return (
      <div className='skillsContent'>
        <h1>Skills</h1>
        <div className='flex'>
        {this.state.skills10.map(skill => {
          return <Chip style={{ margin: 'auto' }} label={skill} />
        })}
        </div>
        <br />
        <div className='flex'>
        {this.state.skills20.map(skill => {
          return <Chip style={{ margin: 'auto' }} label={skill} />
        })}
        </div>
        <br />
        <div className='flex'>
        {this.state.skills30.map(skill => {
          return <Chip style={{ margin: 'auto' }} label={skill} />
        })}
        </div>
      </div>
    )
  }
}

export default Skills;