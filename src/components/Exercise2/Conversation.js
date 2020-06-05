import React, { Component } from 'react';
import Message from './Message';

class Conversation extends Component {

  back = () => {
    this.props.back(null)
  }

  render() {
    const messages = this.props.convo.filter(con => con.with === this.props.sender)[0]
    return (
      <div >
        {messages.convo.map((message,i) => <Message message={message} sender={messages.with} key={message + i}/>)}
            <button onClick={this.back} className='back'>Back</button>
      </div>
    );
  }
}

export default Conversation;
