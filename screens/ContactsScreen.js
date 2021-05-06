import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    StyleSheet,
    View,
    FlatList,
    Dimensions,
    StatusBar,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import List from "../components/List";
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const contacts = [require('../assests/user_photo_1.png'),
require('../assests/user_photo_2.png'),
require('../assests/user_photo_3.png'),
require('../assests/user_photo_4.png'),
require('../assests/user_photo_5.png')];
export default class ContactsScreen extends React.Component {
    constructor({ navigation }) {
        super();
        this.state = {
            data: {},
            scrollIndex: 0,
            selectedIcon: 0
        };
        this.navigation = navigation;
        // this.storeData(data);
        this.getData();
    }

    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('data')
            if (jsonValue != null) {
                this.setState({ data: JSON.parse(jsonValue) })
            };

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#121212" />

                <View style={styles.contactsContainer}>
                    <Text style={styles.title}>Recents</Text>
                    <FlatList
                        data={this.state.data.friend_list}
                        showsVertivalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <List contact={item} userPhoto={contacts[index % 5]} />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.tabContainer}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => this.navigation.navigate("LandingScreen")} >
                            <Image source={require("../assests/home_icon.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require("../assests/contacts_icon_selected.png")} />
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => this.navigation.navigate("SettingsScreen")} >
                            <Image source={require("../assests/settings_icon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    };

};

const styles = StyleSheet.create({
    container: {
        height: vh,
        backgroundColor: "#121212"
    },
    contactsContainer: {
        height: vh * 0.85,
        // backgroundColor: "#ffffff"
    },
    tabContainer: {
        height: vh * 0.1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        color: "#ffffff",
        fontFamily: 'roboto',
        fontStyle: 'normal',
        fontWeight: '900',
        margin: vh / 35
    }
});

