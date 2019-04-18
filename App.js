/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import FirstLogin from './College-App/components/FirstLogin'
import mainTabs from './College-App/components/mainTabs'

const MainNavigator = createStackNavigator({
  firstLogin: {screen: FirstLogin},
  mainTabs: {screen: mainTabs}
});



const App = createAppContainer(MainNavigator);
export default App;

