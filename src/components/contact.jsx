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
        <div >
          Contact
        </div>
        <form>
        <label htmlFor="name">Name</label>
        <input onChange={this.handleName} type="text" name="name" />
    
        <label htmlFor="email">Email</label>
        <input onChange={this.handleEmail} type="email" name="email" />
    
        <label htmlFor="message">Message</label>
        <textarea onChange={this.handleMessage} name="message" rows="3"></textarea>
    
        <input onClick={this.onSubmit} type="submit" />
      </form>
      </div>
    );
  }
} 

export default Contact;
