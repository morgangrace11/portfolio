import React from 'react';
import Axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      name: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleName = this.handleName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    Axios.post('/send', this.state)
    .then(response => {
      console.log(response.data)
      return response.data;
    })
  }

  render() {
    return (
      <div >
        <h1>
          Contact
        </h1>
        <div className="titleContainer">
          <div ><div className="title">Email</div></div>
          <div ><div className="title">LinkedIn</div></div>
          <div ><div className="title">Github</div></div>
        </div>
        <div className="links">
          <div ><a href="mailto:morgangrace720@gmail.com">morgangrace720@gmail.com</a></div>
          <div ><a href="lhttps://www.linkedin.com/in/morgangrace11/">linkedin.com/in/morgangrace11</a></div>
          <div ><a href="https://github.com/morgangrace11">github.com/morgangrace11</a></div>
        </div>
      </div>
    );
  }
} 

export default Contact;
