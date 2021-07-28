import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

import CardColaborador from './CardColaborador';


const AnalisadorDePresenca = ({ data }) => {

    const emptyFlatList = () => {
        return (
            <View style={styles.flatListEmptyContainer}>
                <Image
                    style={styles.emptyFlatListImage}
                    resizeMode='contain'
                    source={{ uri: 'https://cdn.dribbble.com/users/2666881/screenshots/11346959/media/eea44d0bd2ba581f2087172a3891caba.png?compress=1&resize=400x300' }}
                />
                <Text style={styles.emptyMessage}>Nenhum funcionário por aqui!</Text>
            </View>
        )
    }

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={data}
                keyExtractor={(_, idx) => String(idx)}
                renderItem={({ item, index }) => <CardColaborador item={item} index={index} />}
                ListEmptyComponent={emptyFlatList}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 8,
    },
    flatList: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 20
    },
    flatListEmptyContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    emptyMessage: {
        fontWeight: 'bold',
        color: "#bfbfbf",
        fontSize: 20,
        textAlign: 'center'
    },
    emptyFlatListImage: {
        width: 200,
        height: 200
    },
})

export default AnalisadorDePresenca;
