import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)
  }

  render() {
    return (
      <div key={this.props.task.text} >
        <p>{this.props.task.text}</p> - <button onClick={this.complete} className={'complete'}>Complete</button>
      </div>
    )
  }
}

export default Task;
