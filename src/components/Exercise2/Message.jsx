import React, { Component } from 'react';

  class Message extends Component {
  
    render() {
        const sender = this.props.message.sender === 'self' ? "Me" : this.props.sender
        return (
            <div>
                <b><span className={this.props.message.sender === 'self' ? "Me" : "other"}>{sender}: </span></b>
                <span>{this.props.message.text}</span>
            </div>
            )
    }
    
  }
        
export default Message;

