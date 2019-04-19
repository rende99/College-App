import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert, Image } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


class MySchool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerSelection: 'Choose a school:'
        }
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>My School Tab</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button
                    onPress={() => {
                        navigate('contribute');
                    }}
                    title={"Continue"}
                    color='#4B9CD3'

                />
                <Text style={styles.instructions}>If your college isn't listed...</Text>
            </View>
        );
    }
    static navigationOptions = {
        tabBarLabel: 'My School',
        tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon icon={ faUniversity } color={tintColor} size={24} />)
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


export default MySchool
