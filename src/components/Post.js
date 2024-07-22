// Displays individual posts
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ProfilePicture from './ProfilePicture';

const Post = ({ post }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture imageUrl={post.image} username={post.author} />
            <Text style={styles.text}>{post.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },
    text: {
        fontSize: 20,
    },
});

export default Post;