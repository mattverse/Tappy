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

const Card = ({ contact, index, end, selected, userPhoto }) => {

    const getContent = () => {
        return (
            <>
                <Image style={styles.userPhoto} source={userPhoto} ></Image>
                <Text style={{
                    color: "#ffffff",
                    marginTop: vw / 20,
                    fontSize: 24
                }}>{contact[0]}</Text>
                <Text style={{
                    color: "#afafaf",
                    fontSize: 18
                }}>{contact[1]}</Text>
            </>
        );

    };
    var height;
    var marginAdd;
    if (index === selected) {
        height = (vh / 2.5);
        marginAdd = 0;
    }
    else {
        height = 9 / 10 * vh / 2.5;
        marginAdd = 1 / 20 * vh / 2.8;
    }
    const isBegin = (index === 0);
    const isEnd = (index === end);
    return (
        <View>
            {isBegin &&
                <View style={[styles.card, { marginHorizontal: vw / 20, marginTop: marginAdd, marginLeft: vw / (2 * 8 / 3), height }]}>
                    {getContent()}
                </View>}
            {isEnd &&
                <View style={[styles.card, { marginHorizontal: vw / 20, marginTop: marginAdd, marginRight: vw / (2 * 8 / 3), height }]}>
                    {getContent()}
                </View>}
            {!isBegin && !isEnd && <View style={[styles.card, { marginHorizontal: vw / 20, marginTop: marginAdd, height }]}>
                {getContent()}
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#333333",
        width: vw / 1.6,
        borderRadius: vh / 50,
        justifyContent: "center",
        alignItems: 'center'
    },
});
export default Card;
