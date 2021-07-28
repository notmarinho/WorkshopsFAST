import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const userImage = 'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'

const CardColaborador = ({ item, index }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 350 * (index + 1),
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{
            ...styles.container,
            opacity: fadeAnim,
            transform: [{
                translateY: fadeAnim.interpolate(
                    {
                        inputRange: [0, 1],
                        outputRange: [-20, 0]
                    })
            }]
        }}>
            <View style={styles.cardColaboradorImage}>
                <Image
                    style={styles.userImage}
                    resizeMode='cover'
                    source={{ uri: userImage }}
                />
            </View>
            <Text style={styles.cardColaboradorText}>
                {item}
            </Text>
        </Animated.View>
    )
}

export default CardColaborador

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: SCREEN_WIDTH * 0.9,
        height: 65,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        marginVertical: 5
    },
    cardColaboradorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#bfbfbf'
    },
    cardColaboradorText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: "#303030"
    },
    userImage: {
        flex: 1,
        borderRadius: 25
    }
})
