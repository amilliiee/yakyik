// Displays list of posts
import React from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import Post from './Post';
import dummyData from '../utils/dummyData';

const PostList = () => {
    return (
        <FlatList
            data={dummyData}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    )
}

const styles = StyleSheet.create({
    postContainer: {
        paddingVertical: 5,
        width: '100%',  // Ensure each post container spans full width
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',  // Ensure the separator spans full width
    },
});

export default PostList;