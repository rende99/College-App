/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import FirstLogin from './app/components/FirstLogin'
import MainTabs from './app/components/MainTabs'

const MainNavigator = createStackNavigator({
  firstLogin: {screen: FirstLogin},
  mainTabs: {screen: MainTabs}
});



const App = createAppContainer(MainNavigator);
export default App;

