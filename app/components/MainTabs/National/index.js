import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator  } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons'

class National extends React.Component {

    render() {
        return (
            <View>
                <Text>NATIONAL</Text>
                <Button
                    onPress={() => {
                        
                    }}
                    title={"Continue"}
                    color='#4B9CD3'

                />
                

            </View>
        );
    }
    static navigationOptions = {
        tabBarLabel:'National',
        tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon icon={ faFlagUsa } color={tintColor} size={24}/>)
    };
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



export default National