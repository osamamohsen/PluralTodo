

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TaskList from './component/TaskList';
export default class PluralTodo extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn React Native2',
        },
        {
          task: 'Learn React Native3',
        },
        {
          task: 'Learn React Native3',
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <TaskList todos={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('PluralTodo', () => PluralTodo);
