import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PostList from '../components/PostList';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <PostList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;