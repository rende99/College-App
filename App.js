/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import FirstLogin from './app/components/FirstLogin'
import MainTabs from './app/components/MainTabs'
import firebase from 'react-native-firebase';


const MainNavigator = createSwitchNavigator({
  firstLogin: { screen: FirstLogin },
  mainTabs: { screen: MainTabs }
},
  {
    headerMode: 'none',
  }
);

const App = createAppContainer(MainNavigator);
export default App;

