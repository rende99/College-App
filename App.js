/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Button, Alert} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Navigation} from 'react-native-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      pickerSelection: 'Choose a school:'
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
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="UNC Chapel Hill" value="uncch" />
          <Picker.Item label="NC State" value="ncs" />
          <Picker.Item label="Duke" value="duke" />
          <Picker.Item label="Wake Forest" value="wf" />
          <Picker.Item label="UNC Wilmington" value="uncw" />
          <Picker.Item label="ECU" value="ecu" />
          <Picker.Item label="UNC Charlotte" value="uncc" />
          <Picker.Item label="UNC Greensboro" value="uncg" />
          <Picker.Item label="Appalachian State" value="apps" /> 
        </Picker>
        <Button
          onPress={() => {
            Alert.alert('This should register, go into intro page');
          }}
          title={"Continue"}
          color='#4B9CD3'

        />
        <Text style={styles.instructions}>If your college isn't listed...</Text>
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
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: 300,
    color: '#000000',
  },
});
