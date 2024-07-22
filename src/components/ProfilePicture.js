import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfilePicture = ({ imageUrl, username }) => {
    const getInit = (name) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <View style={styles.container}>
            {imageUrl ? (
                <Image style={styles.image} source={{ uri: imageUrl }} />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={styles.text}>{getInit(username)}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    image: {
        width: '100%',
        height: '100%'
    },
    placeholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ProfilePicture;