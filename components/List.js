import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image
} from 'react-native';
const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const List = ({ contact, userPhoto }) => {
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <View style={styles.content}>
                    <Image style={styles.userPhoto} source={userPhoto} />
                    <View style={styles.textContainer}>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'left',
                                color: "#ffffff",
                                fontSize: 20
                            }}
                        > {contact[0]}</Text>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'left',
                                color: "#818181",
                                fontSize: 17,
                                marginLeft: vw * 0.01,
                            }}
                        >
                            {contact[1]}
                        </Text>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        <Image style={{
                            width: vw * 0.1,
                            height: vw * 0.1,
                        }} source={require("../assests/info.png")} />
                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: vh * 0.015
    },
    list: {
        backgroundColor: "#333333",
        width: vw * 0.9,
        height: vh * 0.23,
        borderRadius: vh * 0.02,
    },
    content: {
        flexDirection: "row",
        width: vw * 0.9,
        height: vh * 0.15,
        padding: vw * 0.05,

    },
    footer: {
        borderTopWidth: vw * 0.005,
        borderColor: "#818181"
    },
    textContainer: {
        alignItems: "flex-start",
        justifyContent: 'space-around',
        marginLeft: vw * 0.05,
        textAlign: 'left',
    },

    userPhoto: {
        width: vw * 0.18,
        height: vw * 0.18,
    }
});
export default List;
