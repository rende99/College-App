import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import MySchool from './MySchool';
import Contribute from './Contribute';
import National from './National';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class MainTabs extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View>
                <Text>CONTRIBUTE</Text>
                <Button
                    onPress={() => {

                    }}
                    title={"Continue"}
                    color='#4B9CD3'

                />
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
            activeTintColor: 'orange',
            inactiveTintColor: '#586589',
            showIcon: true,
            style: {
                backgroundColor: '#171F33',
                icon: <FontAwesomeIcon icon={faCoffee}/>
            }
        },

    }
);

export default TabNavigator;
