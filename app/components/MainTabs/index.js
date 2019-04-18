import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator  } from 'react-navigation';
import MySchool from './MySchool'
import Contribute from './Contribute'
import National from './National'

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
});


const TabNavigator = createBottomTabNavigator({
    mySchool: {screen: MySchool},
    contribute:{screen: Contribute},
    national: {screen: National},

})

export default TabNavigator;
