/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keasdasd yboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      pickerSelection: 'Default'
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Homescreen</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 300}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="UNC Chapel Hill" value="java" />
          <Picker.Item label="NC State" value="js" />
          <Picker.Item label="Duke" value="js" />
          <Picker.Item label="Wake Forest" value="js" />
          <Picker.Item label="UNC Wilmington" value="js" />
          <Picker.Item label="ECU" value="js" />
          <Picker.Item label="UNC Charlotte" value="js" />
          <Picker.Item label="UNC Greensboro" value="js" />
          <Picker.Item label="Appalachian State" value="js" /> 
        </Picker>
        <Text style={styles.instructions}>If your college isn'trrrr listed....</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
