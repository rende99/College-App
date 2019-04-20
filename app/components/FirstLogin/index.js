import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Button, Alert, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import { SearchBar } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


class FirstLogin extends React.Component {
    state = {
        search: '',
    };

    //search holds the variable for what is currently typed into the bar.
    updateSearch = search => {
        this.setState({ search });
        isSearching = true;
        if(search !== ''){
            //if the current search isn't empty, we want to start showing search results here:
            <List>
                
            </List>
        }
    };

    render() {
        const { navigate } = this.props.navigation
        const { search } = this.state;

        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>Homescreen</Text>
                <Text style={styles.instructions}>{instructions}</Text>

                <SearchBar
                    containerStyle={{ borderRadius: 5, borderWidth: 0, width: 300, margin: 20, padding: 0 }}
                    searchStyle={{ color: 'black' }}
                    placeholder={"Search for your College/Uni..."}
                    onChangeText={this.updateSearch}
                    value={search}
                    onPress={() => {
                        isSearching = true;
                        <Text style={fontSize}>ASS TIME AAAA</Text>
                    }}
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

class uniList extends React.Component {
    render(){
        return(
            <View>
            <FlatList

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
navigationOptions: {
    headerLeft: null
}


export default FirstLogin
