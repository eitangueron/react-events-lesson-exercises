import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div >
        {this.props.contacts.map(contact => <Contact name={contact} key={contact} displayConvo={this.props.displayConvo}/>)}
        {/* Should render an array of Contact components , with the prop "name"*/}
      </div>
    );
  }
}

export default List;
