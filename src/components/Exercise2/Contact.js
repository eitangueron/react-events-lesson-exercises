import React, { Component } from 'react';

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }

  render() {
    return (
      <div >
        <h4 onClick={this.displayConvo}>{this.props.name}</h4>
      </div>
    );
  }
}

export default Contact;
