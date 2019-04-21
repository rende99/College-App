import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import MySchool from './MySchool';
import Contribute from './Contribute';
import National from './National';


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
    icon: {
        width: 26,
        height: 26
    }
});


const TabNavigator = createBottomTabNavigator(
    {
        mySchool: { screen: MySchool },
        contribute: { screen: Contribute },
        national: { screen: National },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {

            },
        }),
        tabBarOptions: {
            activeTintColor: '#e63946',
            inactiveTintColor: '#457b9d',
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: '#1d3557',
            }
        },

    }
);

export default TabNavigator;
