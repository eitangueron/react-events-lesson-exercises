import React, { Component } from 'react';
import List from './List';
import Conversation from './Conversation';

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = name => {
    this.setState({
      displayConversation: name 
    })
  }

  render() {
    const contacts = this.state.conversations.map(conv => conv.with)
    return (
      <div >
        {!this.state.displayConversation ? <List contacts={contacts} displayConvo={this.displayConvo}/> : <Conversation convo={this.state.conversations} sender={this.state.displayConversation} back={this.displayConvo} />}
      </div>
    );
  }
}

export default Exercise2;
