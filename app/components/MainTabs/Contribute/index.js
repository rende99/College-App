import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator  } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Contribute extends React.Component {
    render() {
        return (
            <View>
                <Text>CONTRIBUTE</Text>
                <Button
                    onPress={() => {
                        navigate('national');
                    }}
                    title={"Continue"}
                    color='#4B9CD3'

                />
            </View>
        );
    }
    static navigationOptions = {
        tabBarLabel: 'Contribute',
        tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon icon={ faCoffee } color={tintColor} />)

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



export default Contribute
