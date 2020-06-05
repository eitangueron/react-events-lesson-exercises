import React, { Component } from 'react';
import Task from './Task';

class SpotCheck5 extends Component {

  // Each task should be desplayed with a Task component.
  // Each Task should display the task's text, and a Complete button with the class "complete"
  // However, SpotCheck5 should filter out the tasks whose complete is true
  // Clicking the Complete button should change that task's complete to true in App's state

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
      ]
    }
  }

  markComplete = text => {
      let newTasks = [...this.state.tasks]
      let taskIndex = this.state.tasks.findIndex(task => task.text === text)
      newTasks[taskIndex].complete = true
      this.setState({
        tasks:newTasks
      })
  }

  render() {
    return (
      <div>
        {this.state.tasks.filter(task => task.complete === false).map(task => <Task key={task.text} task={task} markComplete={this.markComplete}/>)}
      </div>
    )
  }
}

export default SpotCheck5;
