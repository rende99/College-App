import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { SearchBar, List } from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown';

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
    
    state = {
        search: '',
    };

    //search holds the variable for what is currently typed into the bar.
    updateSearch = (search) => {
        this.setState({ search });
        isSearching = true;
        if (search !== '') {
            //if the current search isn't empty, we want to start showing search results here:
            //var uniList = [require('unis.txt')];

        }
    };

    render() {
        const { navigate } = this.props.navigation
        const { search } = this.state;

        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>College App</Text>
                <SearchableDropdown
                        onItemSelect={item => alert(JSON.stringify(item))}
                        containerStyle={{ padding: 5, borderRadius: 10, backgroundColor: '#457B9D'}}
                        textInputStyle={{
                        padding: 6,
                        borderWidth: 0,
                        //borderColor: '#ccc',
                        backgroundColor: '#F1FAEE',
                        borderRadius: 5,
                        }}
                        itemStyle={{
                        padding: 12,
                        marginTop: 2,
                        backgroundColor: '#F1FAEE',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 5,
                        }}
                        itemTextStyle={{ color: '#222' }}
                        itemsContainerStyle={{ maxHeight: 300 , borderRadius: 0}}
                        items={unis}
                        //defaultIndex={2}
                        placeholder="Select your College/University..."
                        resetValue={false}
                        underlineColorAndroid="transparent"
                />
                <Button
                    onPress={() => {
                        navigate('mainTabs');
                    }}
                    title={"Continue"}
                    color='#4B9CD3'
                    
                />
                <Text style={styles.instructions}>If your college isn't listed...</Text>
            </View>
        );
    }
}


class ListItem extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

class ListView extends React.Component {



    render() {

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

