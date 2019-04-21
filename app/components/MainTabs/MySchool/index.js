import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert, Image, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, createBottomTabNavigator } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import {List, ListItem} from 'react-native-elements'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class MySchool extends React.Component {
    state = {
        data: [],
        page: 0,
        loading: false

    }
    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true}); // preparing for request
        const response = await fetch(`https://randomuser.me/api?results=10&seed=hih&page=${this.state.page}`);
        const json = await response.json();
        this.setState(state => ({
            data: [...state.data, ...json.results],
            loading: false })); // done with request
    }

    handleEnd = () => {
        this.setState(state => ({page: state.page + 1}), () => this.fetchData());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Your School Name Here</Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i.toString()}
                    onEndReached={() => this.handleEnd()}
                    onEndReachedThreshold={0.1} //only refreshes once the bottom is nearly reached (0.1)
                    renderItem={({item}) =>
                        <ListItem
                            roundAvatar
                            avatar={{uri: item.picture.thumbnail}}
                            title={`${item.name.first} ${item.name.last}`}
                            onPress={()=>{
                                Alert.alert(`You pressed ${item.name.first} ${item.name.last}`)
                            }}
                        />
                    }



                />
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
    //    flex: 1,
     //   justifyContent: 'center',
      //  alignItems: 'center',
       // backgroundColor: '#F5FCFF',
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
        padding: 8
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


