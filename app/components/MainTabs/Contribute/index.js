import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { PermissionsAndroid } from 'react-native';

async function requestCameraPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'College App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            alert('You can use the camera');
        } else {
            alert('Camera permission denied');
        }
    } catch (err) {
        alert(err);
    }
}

class Contribute extends React.Component {

    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Contribute Tab</Text>
                <Button
                    onPress={() => {
                        if(Platform.OS === 'android'){
                            requestCameraPermission();
                            
                        }else{
                            alert("IOS Device detected")
                        }
                    }}
                    style={styles.button}
                    title='Continue'
                    color='#E63946'
                />
            </View>
        );
    }
    static navigationOptions = {
        tabBarLabel: 'Contribute',
        tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon icon={faPlus} color={tintColor} styles={[styles.icon]} size={24} />)

    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        height: 45,
        width: 100,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 0,
        backgroundColor: '#E63946', // for TouchableOpacity
        color: '#E63946', // in case we are using a Button component instead of a TouchableOpacity one.
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 40,
        height: 40
    }
});



export default Contribute
