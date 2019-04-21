import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert, FlatList, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { SearchBar, List } from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown';
import backgroundVideo from './lights.mp4'
import Video from 'react-native-video'
import { TouchableOpacity } from 'react-native-gesture-handler';

var unis = [
    {
        id: 1,
        name: 'University of North Carolina at Chapel Hill'
    },
    {
        id: 2,
        name: 'Duke University'
    },
    {
        id: 3,
        name: "Wake Forest University"
    },
    {
        id: 4,
        name: 'University of Michigan - Ann Arbor'
    },
    {
        id: 5,
        name: 'North Carolina State University'
    },
    {
        id: 6,
        name: "Michigan State University"
    },
    {
        id: 7,
        name: 'Harvard University'
    },
    {
        id: 8,
        name: 'Princeton University'
    },
    {
        id: 9,
        name: "Louisiana State University"
    },
];



export default class FirstLogin extends React.Component {
    constructor() {
        super()
    }


    _onPress = () => {
        Alert.alert('ssss');
        navigate('mainTabs');
    }



    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.backgroundVideo}>
                <StatusBar backgroundColor="#1d3557" />

                <View style={styles.container}>
                    <Text style={styles.welcome}>College App</Text>
                    <SearchableDropdown
                        onItemSelect={item => alert(JSON.stringify(item))}
                        containerStyle={{ padding: 5, borderRadius: 10, backgroundColor: '#457B9D' }}
                        textInputStyle={{
                            // style of bar when NOT searching through it
                            padding: 8,
                            borderWidth: 0,
                            //borderColor: '#ccc',
                            backgroundColor: '#F1FAEE',
                            borderRadius: 5,

                        }}
                        itemStyle={{
                            // style of bar WHILE searching through it
                            padding: 12,
                            marginTop: 2,
                            backgroundColor: '#F1FAEE',
                            borderWidth: 0,
                            borderRadius: 5,
                        }}
                        itemTextStyle={{
                            color: '#222',
                            fontSize: 18,
                        }}
                        itemsContainerStyle={{ maxHeight: 300, borderRadius: 0 }}
                        items={unis}
                        //defaultIndex={2}
                        placeholder="Select your College or University..."
                        resetValue={false}
                        underlineColorAndroid="transparent"
                    />
                    <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => {navigate('mySchool')}}
                        style={styles.button}
                        title='Continue'
                        color='#E63946'
                    />
                    </View>
                    <Text style={styles.instructions}>If your college isn't listed, sowwy!</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D3557',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 90,
        color: '#F1FAEE',
    },
    instructions: {
        textAlign: 'center',
        color: '#F1FAEE',
        marginBottom: 5,
        fontSize: 16,
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
    buttonContainer: {
        margin: 20
    },
    searchText: {
        fontSize: 50,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

