import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class TaskOutside extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}